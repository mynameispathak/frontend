import React, { Component } from "react";
import classes from "./Question.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Paragraph from "../paragraph";
import Dater from "../Date";
import Time from "../Time";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import BooleanType from "../boolean";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Question extends Component {

  handleSelectOption = (e) => {
    this.props.changeQuestionType(e.target.value, this.props.id);
  };

  dynamicrender = (val) => {
    switch (val) {
      case "text":
        return <Paragraph />;

      case "date":
        return <Dater />;

      case "time":
        return <Time />;
        
      case "radiogroup":
      case "dropdown":
      case "checkbox":
        return (
          <MultipleChoice
            options={this.props.options}
            addOption={this.props.addOption}
            id={this.props.id}
            remove={this.props.remove}
            submitOption={this.props.submitOption}
          />
        );


      case "boolean":
        return <BooleanType />;
    }
  };

  render() {
    return (
      <>
        <div className={classes.Question}>
          <div className={classes.QuestionInfo}>
            <input
              type="text"
              name="name"
              onChange={(event) => this.props.changetitle(event.target.value, this.props.id)}
              placeholder="Question"
            />
            <select
              id="typeofquestion"
              defaultValue={this.props.type}
              onChange={this.handleSelectOption}
              style={{marginTop:'1rem'}}
            >
              <option value="radiogroup">Multiple Choice</option>
              <option value="dropdown">Dropdown</option>
              <option value="text">Paragraph</option>
              <option value="checkbox">CheckBoxes</option>
              <option value="date">Date</option>
              <option value="time">Time</option>
              <option value="boolean">Boolean</option>
            </select>
          </div>

          {this.dynamicrender(this.props.type)}

          <hr />
          <div className={classes.Actions}>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={this.props.checkvalue} onChange={(e) => {this.props.required(e.target.checked,this.props.id)}} />}
                label="Required"
              />
            </FormGroup>

            <FileCopyIcon
              onClick={() => this.props.duplicate(this.props.id)}
              className={classes.Actions1}
            />
            
            <DeleteIcon
              onClick={() => {
                this.props.delete(this.props.id);
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Question;
