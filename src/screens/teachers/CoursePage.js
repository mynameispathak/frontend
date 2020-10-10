import React from "react";
import clsx from "clsx";
import { makeStyles, fade } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import CoursesList from "../../components/teachers/Course/CourseList";
import CreateClassroom from "../../components/teachers/CreateClassroom.js";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	title: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "30px",
		lineHeight: "35px",
		marginLeft: "1%",
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
	},
}));

export default function CoursePage() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={9} lg={9}>
				<Typography variant="h3" gutterBottom className={classes.title}>
					My Courseboard
				</Typography>
			</Grid>
			<Typography>{"\n"}</Typography>
			{/* <Grid item style={{ textAlign: "right" }} xs={12} md={2} lg={4}>
				<Button
					variant="contained"
					style={{
						backgroundColor: "gold",
						borderRadius: "5px",
					}}>
					<Add /> New Course
				</Button>
			</Grid> */}
			<Grid item xs={12} md={3} lg={3}>
				<CreateClassroom style={{ textAlign: "right" }} />
			</Grid>
			<Typography style={{ marginLeft: "1.5%", marginTop: "5px" }}>
				Sort By:{" "}
			</Typography>
			<DropdownButton
				id="dropdown-basic-button"
				title="Last Modified"
				variant="secondary"
				style={{ color: "#F6F8F9", borderRadius: "8px" }}>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</DropdownButton>
			<Paper
				component="form"
				className={classes.root}
				style={{ marginLeft: "60%" }}>
				<IconButton
					type="submit"
					className={classes.iconButton}
					aria-label="search">
					<SearchIcon />
				</IconButton>
				<InputBase
					className={classes.input}
					placeholder="Search Courses ..."
					inputProps={{ "aria-label": "search google maps" }}
				/>
			</Paper>

			<Grid
				container
				spacing={2}
				style={{ marginLeft: "1%", marginRight: "5%", marginTop: "5%" }}>
				<Grid item xs={12} sm={6} md={4} style={{ marginBottom: "1%" }}>
					<CoursesList />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CoursesList />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CoursesList />
				</Grid>

				<Grid item xs={12} sm={6} md={4}>
					<CoursesList />
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<CoursesList />
				</Grid>
			</Grid>
		</Grid>
	);
}
