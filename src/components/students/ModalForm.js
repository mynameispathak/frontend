import React, { useEffect } from "react";
import "../../css/modal.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Calender from "../../images/Calender.png";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import back from "../../images/back.png";
import { CloudArrowUpFill, XCircleFill } from "react-bootstrap-icons";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		flexGrow: 1,
	},
	calender: {
		width: "15px",
		height: "20px",
		marginLeft: "10px",
	},

	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		boxShadow: "none",
		background: "rgba(246, 248, 249, 0.5)",
		borderRadius: "8px",
		justifyContent: "baseline",
	},
	date: {
		textAlign: "center",
		boxShadow: "none",
		background: "rgba(246, 248, 249, 0.5)",
		borderRadius: "8px",
		padding: theme.spacing(1),
	},
	paper1: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: "10px",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: "none",
		width: "35vw",
		fontWeight: "400",
	},
}));
function TransitionsModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [upload, setUpload] = React.useState([]);

	useEffect(() => {
		axios
			.get(
				"http://ec2-18-224-213-191.us-east-2.compute.amazonaws.com/api/call/core_files_upload"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<a onClick={handleOpen}>
				Submit
			</a>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper1}>
						<h2 id="transition-modal-title" style={{ marginTop: "5%"}}>Upload Assignment</h2>

						<h3 id="transition-modal-description" style={{ margin: "2%"}}>Assignment 1</h3>
						<h4 className="topicname">Demo Assignment Name 1</h4>
						<p id="descriptionArea">
							Topic Tags:
							<span className="topic">
								Topic 1 :Linear Eq...<a>x</a>
							</span>
							<span className="add">
								Add Tag <a>+</a>
							</span>
						</p>

						{/*<FormControl component="fieldset" className="fieldset">
							<FormLabel component="legend" className="legend">
								Select Application Batches
							</FormLabel>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch A"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch B"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch C"
									labelPlacement="end"
								/>
							</FormGroup>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch D"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch E"
									labelPlacement="end"
								/>
							</FormGroup>
						</FormControl>*/}
						<div className={classes.root}>
							<Grid container spacing={1}>
								<Grid item>
									<Paper className={classes.paper}>Submission Deadline:</Paper>
								</Grid>
								<Grid item>
									<Paper className={classes.date}>
										Wed,November 17,2020
										<img
											alt=""
											className={classes.calender}
											height="26"
											src={Calender}></img>
									</Paper>
								</Grid>
								<Grid item>
									<Paper className={classes.paper}>4:30pm</Paper>
								</Grid>
							</Grid>
						</div>
						<label style={{ width: "100%" }} for="file_upload">
							<Box
								style={{ cursor: "pointer" }}
								width="100%"
								height="auto"
								id="Drag">
								{upload.map((upload) => {})}
								<CloudArrowUpFill
									color="black"
									size={30}
								/>
								Drag and Drop files or Upload
								<input
									style={{ display: "none" }}
									type="file"
									id="file_upload"
									className="inputFile"
									name="file_upload"
									onDrop={(e) => this.props.onChangeHandler(e)}
								/>
							</Box>
						</label>

						<div id="footer">
							{/*<Button variant="contained" id="back-btn">
								<img src={back}></img>
								BACK
							</Button>*/}
							<div id="button-group">
								<Button
									onClick={handleClose}
									variant="contained"
									color="warning"
									style={{backgroundColor: "#F8F8F8"}}
									id="space"
									>
									Cancel
								</Button>
								<Button variant="contained" color="primary" style={{backgroundColor: "#FFDD42"}}>
									Upload
								</Button>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
export default TransitionsModal;
