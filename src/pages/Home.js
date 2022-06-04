import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/title.svg';
import MainImage from '../assets/visual-img.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handleClickButton = () => {
        //useHistory
        navigate('/question');
    }
    return (
        <Wrapper>
            {/* <Header>퍼스널 터미널 찾기</Header> */}
            <Content>
                <div className="pg-cont">
                    <LogoImage><img src={PangImage} className="logo-img" alt="my Personal Terminal" /></LogoImage>
                    <VisualImage><img src={MainImage} className="visual-img"  alt="" /></VisualImage>
                    <Desc>
                        MBTI를 기반으로 하는 터미널 테마 꾸미기
                    </Desc>
                    <Button className="btn-cta" onClick={handleClickButton}>테스트 시작하기</Button>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Home;
const Wrapper = styled.div`
    width:100%;
    height:100vh;
    font-family:'Cafe24SsurroundAir';
`

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const LogoImage = styled.div`
    margin-top:10px;
`
const VisualImage = styled.div`
    margin-top:10px
`

const Desc = styled.div`
    font-size:20px;
    margin-top:30px;
`