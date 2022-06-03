import React from 'react';
import styled from 'styled-components';
import {ProgressBar, Button} from 'react-bootstrap';
import {QuestionData} from '../assets/data/questiondata';
import {useNavigate} from 'react-router-dom';

const Question = () => {
    const [questionNo, setQuestionNo] = React.useState(0);
    const [totalScore, setTotalScore] = React.useState([
        {id : "EI", score: 0},
        {id : "SN", score: 0},
        {id : "TF", score: 0},
        {id : "JP", score: 0},
    ]);

    const navigate = useNavigate();

    console.log('totalScore', totalScore);
    
    const handleClickButton = (no, type) => {
        const newScore = totalScore.map((s) =>
            s.id === type ? {id: s.id, score: s.score + no} : s 
        )
        setTotalScore(newScore);
        
        //다음 문제로 문제수 증가
        if(QuestionData.length !== questionNo +1){
            setQuestionNo(questionNo + 1);
        } else {
            //결과 페이지로 이동
            navigate("/result")
        }
    }

        // 기존 스코어에 더할 값을 계산하잣!
        // if (type === "EI"){
        //     const addScore = totalScore[0].score + no;
        //     // 새로운 객체 만들기..
        //     const newObject = {id : "EI", score : addScore};
        //     totalScore.splice(0, 1, newObject); //0번째 인덱스의 1번째 요소를 지우고 새로운 newObject를 그 자리에 넣겠다.
        //     setQuestionNo(questionNo + 1);
        // } else if (type === "SN"){
        //     const addScore = totalScore[1].score + no;
        //     const newObject = {id : "SN", score : addScore};
        //     totalScore.splice(1, 1, newObject); 
        //     setQuestionNo(questionNo + 1);
        // } else if (type === "TF"){
        //     const addScore = totalScore[2].score + no;
        //     const newObject = {id : "TF", score : addScore};
        //     totalScore.splice(2, 1, newObject);
        //     setQuestionNo(questionNo + 1);
        // } else {
        //     const addScore = totalScore[3].score + no;
        //     const newObject = {id : "JP", score : addScore};
        //     totalScore.splice(3, 1, newObject); 
        //     
        // }

    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100} style={{marginTop:"20px"}}/>
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)} style={{width:"40%",minHeight:"200px"}}>{QuestionData[questionNo].answera}</Button>
                <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)} style={{width:"40%",minHeight:"200px",marginLeft:'20px'}}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    height:100vh;
    width:100%;
    font-family:'Cafe24SsurroundAir';
    
`
const ButtonGroup = styled.div`
    display:flex;
    flex-direction : row;
    align-items:center;
    justify-content:center;
`

const Title = styled.div`
    text-align:center;
    font-size:30pt;
    margin-top:40px;
    
`