import React from "react";
import classes from "./AnswerItem.module.css";

export default function AnswerItem(props) {
  return <li className={classes.AnswerItem}>
      {props.answer.text}
      </li>;
}
