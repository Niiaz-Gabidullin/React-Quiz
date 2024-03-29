import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom" 

export default function FinishedQuiz(props) {
  const successCount = Object.keys(props.results).reduce((total,key) => {
      if(props.results[key] === "success"){
        total++
      }
      return total
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quezItem, index) => {
          const cls = [
            "fa",
            props.results[quezItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quezItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quezItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
        {/* <li>
          <strong>1.</strong>How are you?
          <i className={"fa fa-times " + classes.error} />
        </li>
        <li>
          <strong>2.</strong>How are you?
          <i className={"fa fa-check " + classes.success} />
        </li> */}
      </ul>
      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        
        <Button onClick={props.onRetry} type={"primary"}>Повторить</Button>
        <Link to="/"> <Button  type={"success"}>Перейти в список тестов</Button></Link>
       
      </div>
    </div>
  );
}
