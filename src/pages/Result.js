import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';

const Result = () => {
    const navigate = useNavigate();
    return (
    <Wrapper>
        <Header>터미널 색상 바꾸긧</Header>
        <Content>
            <Title>결과 보기</Title>
            <LogoImage>
                <img src={ResultData[0].image} className="rounded-circle" width={350} height={350} alt="catbug" />
            </LogoImage>
            <Desc>
                당신은 {ResultData[0].name} 입니다.
            </Desc>
            <Button style={{fontSize:"25px"}} onClick={()=>navigate("/")}>테스트 다시하기</Button>
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