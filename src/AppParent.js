import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "./components/parents/Toast";
import Homepage from "./components/parents/Home";
import Ward from "./components/parents/Ward";
import Grades from "./components/parents/Ward/Grades";
import Content from "./components/parents/Ward/Content";
import Navigation from "./components/parents/Navigation";
import TopicsPage from "./components/parents/TopicsPage";
import Announcements from "./components/parents/Announcements";
import Messenger from "./components/parents/Messenger";

import CombinedCalender from "./components/parents/Calendar/Combined";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function AppParent() {
	const classes = useStyles();

	return (
		<BrowserRouter>
			<div className={classes.root}>
				<CssBaseline />
				<Navigation />
				<Container>
					<Switch>
						<Route path="/parent/toast">
							<Toast />
						</Route>
						<Route path="/parent/topic">
							<TopicsPage />
						</Route>
						<Route exact path="/parent">
							<Homepage />
						</Route>
						<Route exact path="/parent/ward">
							<Ward />
						</Route>
						<Route exact path="/parent/ward/grades">
							<Grades />
						</Route>
						<Route exact path="/parent/ward/content">
							<Content />
						</Route>
						<Route exact path="/parent/announcements">
							<Announcements />
						</Route>
						<Route exact path="/parent/messages">
							<Messenger />
						</Route>
						<Route exact path="/parent/calendar">
							<CombinedCalender />
						</Route>
					</Switch>
				</Container>
			</div>
		</BrowserRouter>
	);
}
