import React,{useState} from "react";
import Layout from "./Components/Layout";
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Modal,  Button } from "@material-ui/core";

function getModalStyle() {
  const left = 50;

  return {
    left: `${left}%`,
    transform: `translateX(-${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '80%',
    height:'auto',
    margin:'2em',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    borderRadius: '20px',
    padding: theme.spacing(2, 4, 3),
  },
}));

function Survey (props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <div>
      <Button onClick={handleOpen} style={{backgroundColor:'#FFDD42',color:'black'}}>
        Next
      </Button>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{overflowX:'scroll',overflowY:'scroll'}}
      >
        <div style={modalStyle} className={classes.paper}>
          <Layout close={handleClose}/>
        </div>
      </Modal>
    </div>
    </BrowserRouter>
  );
};

export default Survey;
