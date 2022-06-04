import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import GitHubImage from '../assets/github-brands.svg'
import KakaoShareButton from '../component/kakaoShareButton';

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const mbti = searchParams.get('mbti');
    //최종적으로 도출한 결과 객체
    const [resultData, setResultData] = React.useState({});


    React.useEffect(()=>{
        const result = ResultData.find((s)=> s.best === mbti);
        setResultData(result);
    },[mbti]) //mbti가 들어온 시점에 계산.

    console.log(resultData);

    return (
    <div className="wrapper">
        <div className="content-w">
            <div className="result--imagearea">
                <div className="pg-cont">
                    <Title>myPersonalTerminal</Title>
                    <img src={resultData.image} className="result-img" alt="catbug" />
                </div>
            </div>
            <div className="pg-cont">
            <Desc>
                <div className="result--title">{resultData.name}</div>
                <div className="result--info">
                    <div className="result--desc">{resultData.desc}</div>
                    <div className={"result--color " + (resultData.best)}>
                        <span className="cr1">1</span>
                        <span className="cr2">2</span>
                        <span className="cr3">3</span>
                        <span className="cr4">4</span>
                        <span className="cr5">5</span>
                    </div>
                </div>
                <div className="result--code-box">
                    <div className="code-box">
                        {resultData.code}
                    </div>
                    <CopyToClipboard text={resultData.code} onCopy={()=>alert("코드가 복사되었습니다")}>
                        <button className="btn-small">COPY</button>
                    </CopyToClipboard>
                </div>
            </Desc>
            
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="profile" title="적용방법">
                    <p className="ref-box">
                    👩‍🎨 🎨 [VSCode] 터미널 색상 적용방법 보기<br></br><a href="https://velog.io/@laonjay/VSCode-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%83%89%EC%83%81-%EC%A0%81%EC%9A%A9%EB%B0%A9%EB%B2%95-%EB%B3%B4%EA%B8%B0" target="_blank" rel="noreferrer">https://velog.io/@laonjay</a>
                    </p>
                </Tab>
                <Tab eventKey="home" title="색상코드">
                    <p className="ref-box">
                    👩‍🎨 🎨 테스트 결과에 쓰인 색상코드는 <br></br><a href="https://glitchbone.github.io/vscode-base16-term" target="_blank" rel="noreferrer">vscode-base16-term</a> 에서 발췌한 내용입니다.<br></br>
                        더 다양한 색상을 사이트에 방문해서 확인해보세요.
                    </p>
                </Tab>
            </Tabs>
            
            <Button className="btn-cta" onClick={()=>navigate("/")}>테스트 다시하기</Button>
            <KakaoShareButton data={resultData} /> 
            {/* 최종데이터를 가지고 온닷 */}
            </div>
        </div>
        <span className="t-copy"><img src={GitHubImage} className="git-mini" alt=""></img> @jindory</span>
    </div>
)
}

export default Result;
const Title = styled.div`
    font-size:13pt;
    font-weight:bold
`

const Desc = styled.div`
    font-size:20px;
    margin-top:20px;
`