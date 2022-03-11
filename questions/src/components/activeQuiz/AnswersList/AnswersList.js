import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

export default function AnswersList(props) {
  return (
    <div>
      <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return(
                <AnswerItem
                key={index}
                answer={answer} 
                onClickHandler={props.onClickHandler}
                state={props.state? props.state[answer.id]: null}
                />
            )
        })}
      </ul>
    </div>
  );
}
