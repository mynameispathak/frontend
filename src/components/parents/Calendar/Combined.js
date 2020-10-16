import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import Day from "./Day";
import Month from "./Month";
import Week from "./Week";
import Modal from "./Modal";
import PropTypes from "prop-types";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Calendar from "react-calendar";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	root1: {
		flexGrow: 1,
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "30px",
		lineHeight: "35px",
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}
function CombinedCalender() {
	const [value, setValue] = React.useState(0);

	const handleChange1 = (event, newValue) => {
		setValue(newValue);
	};
	const [type, setType] = useState("month");
	const classes = useStyles();
	function handleChange(e) {
		setType(e.target.value);
	}

	// Displaying Todays date on the navbar

	var today = new Date(),
		month = today.toLocaleString();

	let displayedComponent;
	if (type === "day") displayedComponent = <Day />;
	else if (type === "month") displayedComponent = <Month />;
	else if (type === "week") displayedComponent = <Week />;
	else displayedComponent = <h5 style={{ textAlign: 'center',}}>Please select a tab</h5>;
	return (
		<div style={{marginTop: "8%"}}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						<div
							style={{
								top: "6%",
								display: "flex",
								marginBottom: "2%",
								marginLeft: "1%",
							}}>
								<Typography variant="h2" gutterBottom className={classes.title}>
									Calendar
								</Typography>
							</div>
						</Grid>
						<Grid item xs={12} md={4} lg={3}>
							<Grid container spacing={2}>
								<Grid item xs={12} md={7} lg={7}>
									<Modal/>
								</Grid>
							</Grid>
						</Grid>
					<div className={classes.root}>
						<Grid container spacing={4}>
							<Grid item xs={12} style={{ marginRight: "-10%"}}>
								<Paper className={classes.paper} style={{ height: "50px" }}>
									<div
										style={{
											display: "flex",

											marginRight: "10px",
										}}>
										<ArrowLeftIcon />
										<ArrowRightIcon />
										<p style={{ fontSize: "15px" }}>{month} </p>
										<div
											style={{
												marginLeft: "50%",
												alignItems: "center",
												marginTop: "-30px",
											}}>
											<FormControl className={classes.formControl}>
												<InputLabel id='demo-simple-select-label'>
													Type
												</InputLabel>
												<Select
													labelId='demo-simple-select-label'
													id='demo-simple-select'
													value={type}
													onChange={handleChange}>
													<MenuItem value={"day"}>Day</MenuItem>
													<MenuItem value={"week"}>Week</MenuItem>
													<MenuItem value={"month"}>Month</MenuItem>
												</Select>
											</FormControl>
											{/* <Select
													labelId='demo-simple-select-label'
													id='outlined-basic'
													value={type}
													onChange={handleChange}>
													<MenuItem value={"day"}>Day</MenuItem>
													<MenuItem value={"week"}>Week</MenuItem>
													<MenuItem value={"month"}>Month</MenuItem>
												</Select> */}
										</div>
									</div>
								</Paper>
							</Grid>
						</Grid>
						<Container>
							<div style={{ marginTop: "5%" }}>{displayedComponent}</div>
						</Container>
					</div>
					{/* <Row>
						<Col>
							<Calendar onChange={this.onChange} value={this.state.date} />
						</Col>
						<Col md={2}>
							<InputLabel id='demo-simple-select-label'>Show By</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={type}
								onChange={handleChange}>
								<MenuItem value={"day"}>Day</MenuItem>
								<MenuItem value={"week"}>Week</MenuItem>
								<MenuItem value={"month"}>Month</MenuItem>
							</Select>
						</Col>
						<Col md={{ span: 2, offset: 8 }}>
							<Modal />
						</Col>
					</Row> */}
				</Grid>
		</div>
	);
}
export default CombinedCalender;
