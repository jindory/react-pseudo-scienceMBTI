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
    
    const handleClickButton = (no, type) => {
        const newScore = totalScore.map((s) =>
            s.id === type ? {id: s.id, score: s.score + no} : s 
        )
        setTotalScore(newScore);
        
        //다음 문제로 문제수 증가
        if(QuestionData.length !== questionNo +1){
            setQuestionNo(questionNo + 1);
        } else {
            //mbti도출 식
            const mbti = newScore.reduce((acc, curr)=>
                acc+(curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
                ""
            );
            //결과 페이지로 이동
            navigate({
                pathname:"/result", 
                search: `?mbti=${mbti}`
            });
        }
    }


    return (
        <div className="wrapper">
            <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100}/>
            <div className="content-w">
                <div className="pg-cont">
                    <h3 class="txt--q">{QuestionData[questionNo].title}</h3>
                    <div className="btn-question">
                        <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)}>{QuestionData[questionNo].answera}</Button>
                        <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)}>{QuestionData[questionNo].answerb}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;