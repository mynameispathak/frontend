import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "../../css/DataGrid.css";
import Chip from "@material-ui/core/Chip";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ModalForm from "./ModalForm";
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
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
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: "flex",
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},

	root1: {
		width: "60vw",
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function SubmissionTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}>
				<Tab label="Assignments" {...a11yProps(0)} />
				<Tab label="Quizzes" {...a11yProps(1)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<h2 style={{ fontSize: "15px" }}>
					Today <Chip label="04" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider />
				</List>

				<h2 style={{ fontSize: "15px" }}>
					Tomorrow <Chip label="02" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<AssignmentIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							<ModalForm />
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
				</List>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<h2 style={{ fontSize: "15px" }}>
					Today <Chip label="04" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider />
				</List>

				<h2 style={{ fontSize: "15px" }}>
					Tomorrow <Chip label="02" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
				</List>
			</TabPanel>
			{/* <TabPanel value={value} index={2}>
				<h2 style={{ fontSize: "15px" }}>
					Today <Chip label="04" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider />
				</List>

				<h2 style={{ fontSize: "15px" }}>
					Tomorrow <Chip label="02" />
				</h2>

				<List
					component="nav"
					className={classes.root1}
					aria-label="mailbox folders">
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
					<ListItem className="styleTab">
						<ListItemAvatar>
							<Avatar>
								<HelpOutlineIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Course" secondary="CourseName2" />
						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "20px" }}
						/>
						<ListItemText primary="Deadline" secondary="Today 5:00pm" />
						<Button
							variant="contained"
							style={{ backgroundColor: "gold", marginRight: "10px" }}
							disableElevation>
							Start Quiz
						</Button>
						<MoreVertIcon />
					</ListItem>
					<Divider light />
				</List>
			</TabPanel>
			<TabPanel value={value} index={3}>
				Others
			</TabPanel> */}
		</div>
	);
}
