import React from "react";
import classes from "./MultipleChoice.module.css";
import CheckBox from "./CheckBox/CheckBox";

function MultipleChoice(props) {
  return (
    <div className={classes.MultipleChoice}>
      {props.options.map((option) => {
        return (
          <CheckBox
            name={option.name}
            value={option.value}
            submit={props.submitOption}
            quesId={props.id}
            optionId={option.id}
            remove={props.remove}
          >
            {option.name}
          </CheckBox>
        );
      })}
      <i className="fas fa-stop"></i>
      <div
        onClick={() => props.addOption(props.id)}
        style={{ display: "inline-block" ,margin:'1rem',color:"gray"}}
      >
        Add option
      </div>
    </div>
  );
}

export default MultipleChoice;
