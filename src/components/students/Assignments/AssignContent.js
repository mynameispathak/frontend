import React from "react";
import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
	Search,
	GetApp,
	MoreVert,
	Add,
	Publish,
	Edit,
	RadioButtonUnchecked,
	Assignment,
	Help,
	Delete,
} from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
function createData(symbol, name, date) {
	return { symbol, name, date };
}
const rows = [
	createData(
		<Assignment style={{ color: "gray", marginRight: "20px" }} />,
		"Topic Name 1",
		" THU at 5pm"
	),
	createData(
		<Help style={{ color: "gray", marginRight: "20px" }} />,
		"Topic Name 2",
		" WED at 8pm"
	),
	createData(
		<Assignment style={{ color: "gray", marginRight: "20px" }} />,
		"Topic Name 3",
		" THU at 5pm"
	),
	createData(
		<Help style={{ color: "gray", marginRight: "20px" }} />,
		"Topic Name 4",
		" THU at 5pm"
	),
];
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		marginLeft: "20px",
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

	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
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
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

		width: "100%",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 70,
		marginTop: "-10px",
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
}));
function AssignContent() {
	const classes = useStyles();
	const [age, setAge] = React.useState("");
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<div>
			<div
				className={classes.search}
				style={{ backgroundColor: "rgba(222, 231, 238, 0.2)" }}>
				<div className={classes.searchIcon}>
					<Search />
				</div>
				<InputBase
					placeholder="Search Assignment ..."
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ "aria-label": "search" }}
				/>
			</div>
			<div className="buttonGroup" style={{ float: "right", marginTop: "3%" }}>
				<Button
					variant="outlined"
					style={{
						backgroundColor: "gold",
						border: "2px solid gold",
						fontWeight: "600",
						textTransform: "unset",
					}}>
					View Assignment
				</Button>

				{/* <FormControl className={classes.formControl}>
					<InputLabel id='demo-simple-select-label'>More</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select-label'
						value={age}
						onChange={handleChange}
						label='Age'>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl> */}
			</div>
			<TableContainer component={Paper} style={{ marginTop: "10%" }}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead style={{ backgroundColor: "rgba(222, 231, 238, 0.2)" }}>
						<TableRow>
							<TableCell> NAME</TableCell>
							<TableCell align="center">DUE DATE</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								style={{
									borderRadius: "6px",
								}}
								key={row.name}>
								<TableCell component="th" scope="row">
									{row.symbol}
									{row.name}
								</TableCell>
								<TableCell align="center">{row.date}</TableCell>
								<TableCell align="right">
									<div>
										<RadioButtonUnchecked
											style={{
												color: "green",
												marginRight: "10px",
											}}
										/>
										<Link to="/submission">
											<Button
												variant="contained"
												style={{
													fontSize: "12px",
													textTransform: "unset",
													fontWeight: "600",
													boxShadow: "unset",
												}}>
												View Submission
											</Button>
										</Link>

										<button
											style={{
												borderRadius: "50%",
												border: "unset",
											}}>
											<MoreVert style={{ padding: "4px" }} />
										</button>
									</div>
								</TableCell>
								{/*<RadioButtonUnchecked
											style={{
												color: "green",
												marginRight: "10px",
											}}

										/>
										<Link to="/submission">
											<Button
												variant="contained"
												style={{
													fontSize: "12px",
													textTransform: "unset",
													fontWeight: "600",
													boxShadow: "unset",
												}}>
												View Submission
											</Button>
										</Link>

										{/* <button
											style={{
												borderRadius: "50%",
												border: "unset",
												marginRight: "10px",
												marginLeft: "20px",
											}}>
											<Edit style={{ padding: "4px" }} />
										<button
											style={{
												borderRadius: "50%",
												border: "unset",
												marginRight: "10px",
												marginLeft: "20px",
											}}>
											<Delete style={{ padding: "4px" }} />
										</button>
										<button
											style={{
												borderRadius: "50%",
												border: "unset",
											}}>
											<MoreVert style={{ padding: "4px" }} />
										</button>*/}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default AssignContent;
