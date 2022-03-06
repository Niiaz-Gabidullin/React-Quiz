import React from "react";
import classes from "./AnswerItem.module.css";

export default function AnswerItem(props) {
  return <li className={classes.AnswerItem} onClick={()=> props.onClickHandler(props.answer.id)}>
      {props.answer.text}
      </li>;
}
