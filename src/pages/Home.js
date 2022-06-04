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
        <div className="wrapper">
            {/* <Header>퍼스널 터미널 찾기</Header> */}
            <div className="content-w">
                <div className="pg-cont">
                    <img src={PangImage} className="logo-img" alt="my Personal Terminal" />
                    <img src={MainImage} className="visual-img"  alt="" />
                    <Desc>
                        MBTI를 기반으로 하는 터미널 테마 꾸미기
                    </Desc>
                    <Button className="btn-cta home" onClick={handleClickButton}>테스트 시작하기</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;
const Desc = styled.div`
    font-size:16px;
    margin-top:30px;
`