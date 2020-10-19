import React, { Component } from "react";
import classes from "./Layout.module.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Questions from "./Questions/Questions";

class Layout extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={classes.Layout}>
        <div className={classes.Layout__Header}>
          <div style={{display:'flex'}}>
            <div className={classes.Layout__Header__Heading}>Quiz Creator </div>
            <div style={{flex:'1'}}></div>
            <div className={classes.Layout__Header__Heading} style={{display:'inline-block'}}>
            <span title='close'>
              <HighlightOffIcon onClick={this.props.close}/>
            </span>
            </div>
          </div>
          <div className={classes.Layout__Header__NavBar}>
            <div
              className={classes.Layout__Header__NavTab}
              activeClassName={classes.Layout__Header__NavTab__Active}
            >
              <span style={{textTransform:'uppercase'}}>Questions</span>
            </div>
          </div>
        </div>
        <div className={classes.Layout__Main}>
          <Questions close={this.props.close}/>
          
        </div>
      </div>
    );
  }
}

export default Layout;
