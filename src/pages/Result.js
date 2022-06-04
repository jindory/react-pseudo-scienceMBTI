import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

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
    <Wrapper>
        <Content>
            <div className="result--imagearea">
                <div className="pg-cont">
                    <Title>결과 보기</Title>
                    <img src={resultData.image} className="result-img" alt="catbug" />
                </div>
            </div>
            <div className="pg-cont">
            <Desc>
                <div className="result--title">{resultData.name}</div>
                <div className="result--info">
                    <Info>{resultData.desc}</Info>
                    <div className={"result--color " + (resultData.best)}>
                        <span className="cr1">1</span>
                        <span className="cr2">2</span>
                        <span className="cr3">3</span>
                        <span className="cr4">4</span>
                        <span className="cr5">5</span>
                    </div>
                </div>
                <CodeGroup>
                    <div class="result--code-box">
                        <div class="code-box">
                            {resultData.code}
                        </div>
                        <button class="btn-small">색상코드 복사</button>
                    </div>
                </CodeGroup>
            </Desc>
            <Button className="btn-cta" onClick={()=>navigate("/")}>테스트 다시하기</Button>
            </div>
        </Content>
    </Wrapper>
)
}

export default Result;

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    font-family:'Cafe24SsurroundAir';
    
`

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Title = styled.div`
    font-size:15pt;
    font-weight:bold
`

const Desc = styled.div`
    font-size:20px;
    margin-top:20px;
`

const Info = styled.div`
    font-size:20px;
    margin-top:20px;
`

const CodeGroup = styled.div`
    
`