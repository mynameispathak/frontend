import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import SubmissionTabs from "./SubmissionTabs";
import DataGrid from "./DataGrid";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: "70px",
	},
	formControl: {
	  minWidth: 120,
	  position: "absolute", 
	  left: "70%",
	  marginTop: "10px",
	},
	selectEmpty: {
	},
  }));

export default function DisabledTabs() {
	const [value, setValue] = React.useState(0);
	const classes = useStyles();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [age, setAge] = React.useState(0);

  	const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

	return (
		<Paper>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example"
				square className={classes.root}>
				<Tab
					style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
					label="Upcoming Classes"
				/>
				<Tab
					style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
					label="Submissions"
				/>
				<div>
					{/* <span style={{ position: "absolute", left: "70%", fontSize: "18px" }}> */}
						<FormControl variant="outlined" className={classes.formControl}>
        					<InputLabel id="demo-simple-select-outlined-label">Show for</InputLabel>
        					<Select
          						labelId="demo-simple-select-outlined-label"
          						id="demo-simple-select-outlined"
          						value={age}
          						onChange={handleAgeChange}
          						label="Show for"
        					>
          						<MenuItem value="0">
            						Today
          						</MenuItem>
          						<MenuItem value={"1"}>This Week</MenuItem>
          						<MenuItem value={2}>This Month</MenuItem>
          						<MenuItem value={3}>All classes</MenuItem>
        					</Select>
      						</FormControl>
					{/* </span> */}
				</div>
			</Tabs>
			<TabPanel value={value} index={0}>
				<DataGrid></DataGrid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<SubmissionTabs></SubmissionTabs>
			</TabPanel>
		</Paper>
	);
}




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
