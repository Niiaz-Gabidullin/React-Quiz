import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  const cls = [classes.Button, classes[props.type]];
  return (
    <button
      className={cls.join(" ")}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
