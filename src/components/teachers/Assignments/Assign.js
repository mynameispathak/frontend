import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
	NotificationsOutlined,
	FlashOn,
	Search,
	GetApp,
	MoreVert,
	AddBox,
} from "@material-ui/icons";

import Box from "@material-ui/core/Box";
// import SubmissionContent from "./SubmisionContents";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";
import CourseList from "../Course/CourseListOpen";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TopicContent from "./TopicCntent";
import AssignContent from "./AssignContent";
import StudentsContent from "./StudentsContent";
import CreateClassroom from "../CreateClassroom";
import QuizContent from "./Quiz";
function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		marginLeft: "1%",
	},
	root1: {
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
		marginTop: "-5%",
		marginBottom: "2%",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},

	selectEmpty: {
		marginTop: theme.spacing(1),
	},
	table: {
		minWidth: 650,
	},
	root2: {
		minWidth: 240,
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "auto",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		//vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

		width: "100%",
	},
}));
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
function SubmissionContent() {
	const [value, setValue] = React.useState(0);
	const classes = useStyles();
	const handleChangeHori = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div style={{ marginRight: "5%", marginTop: "5%", marginLeft: "1%"}}>
			<div className={classes.root1}>
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize="small" />}
					aria-label="breadcrumb">
					<Link color="inherit" to="/courses">
						My Courseboard
					</Link>
					<Typography
						color="inherit"
						href="/getting-started/installation/"
						onClick={handleClick}>
						Class Name 1
					</Typography>
				</Breadcrumbs>
				<div style={{ marginLeft: "80%", marginTop: "-20px" }}>
					{/* <NotificationsOutlined style={{ marginRight: "20px" }} />
					<FlashOn
						style={{
							color: "yellow",
							backgroundColor: "black",
							padding: "2px",
							borderRadius: "5px",
							marginRight: "20px",
						}}
					/> */}
					<CreateClassroom />
				</div>
			</div>

			<div className={classes.root}>
				<Grid container>
					<Grid item xs={4}>
						<Paper className={classes.paper}>
							<div
								className={classes.search}
								style={{
									backgroundColor: "rgba(222, 231, 238, 0.2)",
								}}>
								<div className={classes.searchIcon}>
									<AddBox style={{ marginLeft: "-30px" }} />
									<Search />
								</div>
								<InputBase
									placeholder="Search Courses..."
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ "aria-label": "search" }}
								/>
							</div>
							<Card
								style={{
									marginTop: "20px",
									boxShadow: "unset",
									overflowY: "auto",
									height: "70vh",
									paddingRight: "15px",
								}}>
								<CourseList />
							</Card>
						</Paper>
					</Grid>

					<Grid item xs={8}>
						<Paper className={classes.paper}>
							<div className={classes.root}>
								<AppBar
									position="static"
									style={{
										backgroundColor: "unset",
										color: "black",
										outline: "none",
										boxShadow: "unset",
									}}>
									<Tabs
										value={value}
										onChange={handleChangeHori}
										aria-label="simple tabs example">
										<Tab label="Topic" {...a11yProps(0)} />
										<Tab label="Assignment" {...a11yProps(1)} />
										<Tab label="Students" {...a11yProps(2)} />
										<Tab label="Quiz" {...a11yProps(3)} />
									</Tabs>
								</AppBar>
								<TabPanel value={value} index={0}>
									<TopicContent />
								</TabPanel>
								<TabPanel value={value} index={1}>
									<AssignContent />
								</TabPanel>
								<TabPanel value={value} index={2}>
									<StudentsContent />
								</TabPanel>
								<TabPanel value={value} index={3}>
									<QuizContent />
								</TabPanel>
							</div>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default SubmissionContent;
