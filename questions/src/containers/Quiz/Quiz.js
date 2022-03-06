import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        answers: [
          { text: "черного", id: 1 },
          { text: "синего", id: 2 },
          { text: "красного", id: 3 },
          { text: "зеленого", id: 4 },
        ],
      },
    ],
  };
  onAnswerClickHandler= (answerId)=>{
    console.log(answerId);
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz 
          answers={this.state.quiz[0].answers}
          question={this.state.quiz[0].question}
          onClickHandler={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
