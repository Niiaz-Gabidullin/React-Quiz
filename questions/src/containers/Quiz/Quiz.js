import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "черного", id: 1 },
          { text: "синего", id: 2 },
          { text: "красного", id: 3 },
          { text: "зеленого", id: 4 },
        ],
      },
      {
        question: "В каком году основали Санкт Петербург?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1780", id: 1 },
          { text: "1707", id: 2 },
          { text: "1703", id: 3 },
          { text: "1710", id: 4 },
        ],
      },
    ],
  };
  onAnswerClickHandler = (answerId) => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onClickHandler={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}
