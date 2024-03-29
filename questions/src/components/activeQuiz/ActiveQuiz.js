import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

export default function (props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.answerNumber}</strong>&nbsp;
          {props.question}
        </span>
        <small>{props.answerNumber} из {props.quizLength}</small>
      </p >
      <AnswersList
      state={props.state}
      answers={props.answers}
      onClickHandler={props.onClickHandler}
      />
    </div>
  );
}
