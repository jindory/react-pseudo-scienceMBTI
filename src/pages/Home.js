import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/img.jpeg';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Wrapper>
            <Header>터미널 색상 바꾸긧</Header>
            <Content>
                <Title>나만의 터미널 꾸미기</Title>
                <LogoImage>
                    <img src={PangImage} className="rounded-circle" width={350} height={350}></img>
                </LogoImage>
                <Desc>
                    MBTI를 기반으로 하는 내 터미널 꾸미깅
                </Desc>
                <Button>테스트 시작하기</Button>
            </Content>
        </Wrapper>
    )
}

export default Home;
const Wrapper = styled.div`
    height:100vh;
    width:100%;
    
`

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Header = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:40pt;
`

const Title = styled.div`
    font-size:30pt;
    margin-top:40px;
`

const LogoImage = styled.div`
    margin-top:10px;

`

const Desc = styled.div`
    font-size:20px;
    margin-top:30px;
`