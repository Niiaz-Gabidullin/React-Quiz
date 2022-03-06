import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

export default function (props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>2.</strong>&nbsp;
          {props.question}
        </span>
        <small>4 из 12</small>
      </p >
      <AnswersList
      answers={props.answers}
      onClickHandler={props.onClickHandler}
      />
    </div>
  );
}
