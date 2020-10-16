import React from "react";
import { Link } from "react-router-dom";

import {
	makeStyles,
	useTheme,
	Drawer,
	AppBar,
	Toolbar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	Divider,
	IconButton,
	Collapse,
} from "@material-ui/core";
import {
	Menu,
	ChevronLeft,
	ChevronRight,
	Home,
	People,
	CalendarToday,
	LocalActivity,
	QuestionAnswer,
	ExpandLess,
	ExpandMore,
	Announcement,
	Chat,
} from "@material-ui/icons";
import clsx from "clsx";

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
	menuItems: {
		color: "black",
		textDecoration: "none",
	},
	nested: {
		paddingLeft: theme.spacing(3),
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

export default function Navigation() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(
		window.innerWidth >= 900 ? true : false
	);
	const [connectOpen, setConnectOpen] = React.useState(false);

	const handleClick = () => {
		setConnectOpen(!connectOpen);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap>
						Welcome, Mr. Smith
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}>
				<div className={classes.toolbar}>
					<Typography variant="h6" noWrap>
						Parents Portal&nbsp;
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link to="/parent">
						<ListItem button>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary="Home" className={classes.menuItems} />
						</ListItem>
					</Link>
					<Link to="/parent/ward">
						<ListItem button>
							<ListItemIcon>
								<People />
							</ListItemIcon>
							<ListItemText primary="Ward" className={classes.menuItems} />
						</ListItem>
					</Link>
					<Link to="/parent/calendar">
						<ListItem button>
							<ListItemIcon>
								<CalendarToday />
							</ListItemIcon>
							<ListItemText primary="Calendar" className={classes.menuItems} />
						</ListItem>
					</Link>
					<ListItem button>
						<ListItemIcon>
							<LocalActivity />
						</ListItemIcon>
						<ListItemText primary="Activity" className={classes.menuItems} />
					</ListItem>
					<ListItem button onClick={handleClick}>
						<ListItemIcon>
							<QuestionAnswer />
						</ListItemIcon>
						<ListItemText primary="Connect" className={classes.menuItems} />
						{connectOpen ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={connectOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link to="/parent/announcements">
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<Announcement />
									</ListItemIcon>
									<ListItemText
										primary="Announcements"
										className={classes.menuItems}
									/>
								</ListItem>
							</Link>
							<Link to="/parent/messages">
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<Chat />
									</ListItemIcon>
									<ListItemText
										primary="Messages"
										className={classes.menuItems}
									/>
								</ListItem>
							</Link>
						</List>
					</Collapse>
				</List>
			</Drawer>
		</>
	);
}
