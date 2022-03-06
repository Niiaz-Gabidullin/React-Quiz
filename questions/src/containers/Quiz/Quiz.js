import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

export default class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "вопрос 1" },
          { text: "вопрос 1" },
          { text: "вопрос 1" },
          { text: "вопрос 1" },
        ],
      },
    ],
  };
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
          answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    );
  }
}
