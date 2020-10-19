import React, { Component } from "react";
import classes from "./Questions.module.css";
import Question from "../Question/Question";
import shortid from "shortid";
import { Button, Tooltip } from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import Grid from "@material-ui/core/Grid";
import back from "../../../../../images/back.png";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: false,
      descriptionInput: false,
      // if this is given any value then the quiz is allowd only once per system
      cookieName: "",
      title: "",
      description: "",
      Questions: [
        {
          id: shortid.generate() + new Date().getTime(),
          title: "Question",
          type: "paragraph",
          isRequired:false,
          options: [
            {
              title: "option1",
              name: "option1",
              value: "option1",
              id: shortid.generate() + new Date().getUTCMilliseconds(),
            },
          ],
        },
      ],
    };
  }

  onChangeInputStatus = (field) => {
    this.setState({
      [field]: true,
    });
  };

  onInputChangeHandler = (event, field) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  onSubmitHandler = (event, field) => {
    if (event.key === "Enter") {
      this.setState({
        [field]: false,
      });
    }
  };

  AddQuestionHandler = () => {
    let updatedQuestionArray = [...this.state.Questions];
    updatedQuestionArray.push({
      id: shortid.generate() + new Date().getTime(),
      title: "Quesiton",
      type: "multiple choice",
      options: [
        {
          title: "option1",
          name: "option1",
          value: "option1",
          id: shortid.generate() + new Date().getUTCMilliseconds(),
        },
      ],
    });
    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  allowSingleQuizAttemptPerSystemHandler = () => {
    this.setState((prevState) => {
      return {
        cookieName: prevState.cookieName === "" ? "myUniqueQuizId" : "",
      };
    });
  };

  deleteQuestionHandler = (questionId) => {
    let updatedQuestionArray = this.state.Questions.filter((ques) => {
      return ques.id !== questionId;
    });
    this.setState({
      Questions: updatedQuestionArray,
    });
  };
  duplicateQuestionHandler = (questionId) => {
    let newQuestionIndex = this.state.Questions.findIndex((ques) => {
      return ques.id === questionId;
    });

    let newQuestion = { ...this.state.Questions[newQuestionIndex] };
    newQuestion.id = shortid.generate() + new Date().getTime();
    let updatedQuestionArray = [...this.state.Questions, newQuestion];
    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  getQuesIndex = (questionId) => {
    let updatedQuestionArray = [...this.state.Questions];
    let quesIndex = updatedQuestionArray.findIndex((ques) => {
      return ques.id === questionId;
    });
    return quesIndex;
  };
  getRequiredQuestion = (questionId) => {
    let updatedQuestionArray = [...this.state.Questions];

    let quesIndex = this.getQuesIndex(questionId);

    let updatedQues = { ...updatedQuestionArray[quesIndex] };

    return updatedQues;
  };
  addOption = (questionId) => {
    let updatedQuestionArray = [...this.state.Questions];

    let updatedQues = this.getRequiredQuestion(questionId);
    let quesIndex = this.getQuesIndex(questionId);

    let updatedOptionsArray = [...updatedQues.options];
    let numOfOptions = updatedOptionsArray.length + 1;

    updatedOptionsArray.push({
      title: "option" + numOfOptions,
      name: "option" + numOfOptions,
      value: "option" + numOfOptions,
      id: shortid.generate() + new Date().getUTCMilliseconds(),
    });

    updatedQues.options = updatedOptionsArray;

    updatedQuestionArray[quesIndex] = updatedQues;

    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  onSubmitOptionHandler = (quesId, optionId, optionValue) => {
    let updatedQuestionArray = [...this.state.Questions];

    let updatedQues = this.getRequiredQuestion(quesId);
    let quesIndex = this.getQuesIndex(quesId);

    let optionIndex = updatedQues.options.findIndex((option) => {
      return option.id === optionId;
    });

    updatedQues.options[optionIndex].name = optionValue;
    updatedQues.options[optionIndex].value = optionValue;
    updatedQues.options[optionIndex].title = optionValue;

    updatedQuestionArray[quesIndex] = updatedQues;
    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  onRemoveOptionHandler = (quesId, optionId) => {
    let updatedQuestionArray = [...this.state.Questions];

    let updatedQues = this.getRequiredQuestion(quesId);
    let quesIndex = this.getQuesIndex(quesId);

    updatedQues.options = updatedQues.options.filter((option) => {
      return option.id !== optionId;
    });

    updatedQuestionArray[quesIndex] = updatedQues;
    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  onChangeQuestionTypeHandler = (type, quesId) => {
    let updatedQuestionArray = [...this.state.Questions];

    let updatedQues = this.getRequiredQuestion(quesId);
    let quesIndex = this.getQuesIndex(quesId);

    updatedQues.type = type;

    updatedQuestionArray[quesIndex] = updatedQues;
    this.setState({
      Questions: updatedQuestionArray,
    });
  };
  onChangeTitleHandler = (value, quesId) => {
    let updatedQuestionArray = [...this.state.Questions];

    let updatedQues = this.getRequiredQuestion(quesId);
    let quesIndex = this.getQuesIndex(quesId);

    updatedQues.title = value;

    updatedQuestionArray[quesIndex] = updatedQues;
    this.setState({
      Questions: updatedQuestionArray,
    });
  };

  requirehandler = (req,quesId) => {
    let updateQuestion = [...this.state.Questions];

    let updateQues = this.getRequiredQuestion(quesId);
    let qIndex = this.getQuesIndex(quesId);

    updateQues.isRequired = req;

    updateQuestion[qIndex] = updateQues;
    this.setState({
      Questions: updateQuestion,
    });
  }

  handle = () => {
    console.log(this.state.Questions);
    //api call to post the data
  };

  render() {
    let questions = null;
    questions = this.state.Questions.map((ques) => {
      return (
        <Question
          type={ques.type}
          changetitle={this.onChangeTitleHandler}
          changeQuestionType={this.onChangeQuestionTypeHandler}
          remove={this.onRemoveOptionHandler}
          delete={this.deleteQuestionHandler}
          duplicate={this.duplicateQuestionHandler}
          key={ques.id}
          id={ques.id}
          addOption={this.addOption}
          submitOption={this.onSubmitOptionHandler}
          required={this.requirehandler}
          checkvalue={ques.isRequired}
          options={ques.options}
          {...ques}
        />
      );
    });

    const { titleInput, descriptionInput } = this.state;
    return (
      <div className={classes.Questions}>
        <div className={classes.QuestionsHeader}>
          <div>
            {titleInput ? (
              <input
                type="text"
                name="QuizTitle"
                placeholder="Untitled Quiz"
                className={classes.titleInput}
                onChange={(event) => this.onInputChangeHandler(event, "title")}
                onKeyPress={(event) => {
                  this.onSubmitHandler(event, "titleInput");
                }}
                value={this.state.title}
              />
            ) : (
              <div
                className={classes.QuestionsHeader__title}
                onClick={() => {
                  this.onChangeInputStatus("titleInput");
                }}
              >
                {!titleInput && this.state.title !== ""
                  ? this.state.title
                  : "Untitled Quiz"}
              </div>
            )}
            {descriptionInput ? (
              <input
                type="text"
                name="description"
                placeholder="Quiz Description"
                className={classes.descriptionInput}
                onChange={(event) =>
                  this.onInputChangeHandler(event, "description")
                }
                onKeyPress={(event) => {
                  this.onSubmitHandler(event, "descriptionInput");
                }}
                value={this.state.description}
              />
            ) : (
              <div
                className={classes.QuestionsHeader__description}
                onClick={() => {
                  this.onChangeInputStatus("descriptionInput");
                }}
              >
                {!descriptionInput && this.state.description !== ""
                  ? this.state.description
                  : "Write Quiz description Here"}
              </div>
            )}
          </div>
          <div className={classes.QuizControl__Actions}>
            <div>
              <Tooltip
                title={
                  this.state.cookieName === ""
                    ? "Allow one Attempt for each system"
                    : "Allow any attempts for each system"
                }
                onClick={this.allowSingleQuizAttemptPerSystemHandler}
              >
                <AdjustIcon
                  style={{
                    color: this.state.cookieName === "" ? "red" : "green",
                  }}
                />
              </Tooltip>
            </div>
          </div>
        </div>
        {questions}
        <span className={classes.plusIcon} title="Add Question">
          <div
            onClick={this.AddQuestionHandler}
            style={{ display: "inline-block" }}
          >
            + ADD QUESTION
          </div>
        </span>
        <div>
          <Grid container justify="flex-start" spacing={0}>
            <Grid item xs={3}>
              <Button
                variant="contained"
                id="back-btn"
                onClick={this.props.close}>
                <img src={back} alt=""></img>
                BACK
              </Button>
            </Grid>
            <Grid item xs={9}>
              <Grid container justify="flex-end" spacing={0}>
                <Grid item>
                  <Button
                    onClick={this.props.close}
                    style={{
                      backgroundColor: "#F8F8F8",
                      color: "black",
                      fontWeight: "bold",
                      width: "20%",
                      marginTop: "1em",
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={this.handle}
                    style={{
                      backgroundColor: "#FFDD42",
                      color: "black",
                      fontWeight: "bold",
                      width: "20%",
                      marginTop: "1em",
                    }}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Questions;
