import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";

import Card from "@material-ui/core/Card";

import BookIcon from "@material-ui/icons/Book";
import SimpleCard from "./Original/2.1.3";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import BarChartIcon from "@material-ui/icons/BarChart";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PublishIcon from "@material-ui/icons/Publish";
import StarsIcon from "@material-ui/icons/Stars";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationModal from "./NotificationModal";
import CreateCourse from "./CreateCourse";
import ModalForm from "./ModalForm";
import QuizModal from "./QuizModal";
import ViewStudy from "./Course/ViewStudy";
import {
	GroupAdd,
	OfflineBolt,
	PersonAdd,
	PostAdd,
	Stars,
} from "@material-ui/icons";
import TopicsDataGrid from "./Course/TopicsDataGrid";
const useStyles = makeStyles((theme) => ({
	root: {
		width: 500,
	},
	typography: {
		padding: theme.spacing(2),
	},
	hoverstyle: {
		color: "black",
		"&:hover": {
			backgroundColor: "gold",
			cursor: "pointer",
		},
	},
}));
export default function CreateClassroom() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();
	const classes = useStyles();

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};
	const customStyle = {
		fontSize: "40px",
		padding: "10px  2px 2px",
		width: "80px",
		color: "grey",
	};
	return (
		<div className={classes.root}>
			<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper
							style={{
								marginTop: "20px",
								display: "grid",
								gridTemplateColumns: "auto auto auto",
								color: "grey",
								boxShadow:
									"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.034)",
							}}>
							<Card className={classes.hoverstyle}>
								<BookIcon style={customStyle} />
								<p
									style={{
										fontSize: "12px",

										textAlign: "center",
										color: "blue",
										cursor: "pointer",
									}}>
									<TopicsDataGrid />
								</p>
							</Card>
							<Card className={classes.hoverstyle}>
								<AssignmentIcon style={customStyle} />
								<p
									style={{
										fontSize: "12px",
										marginLeft: "5px",
										textAlign: "center",
										color: "blue",
										cursor: "pointer",
									}}>
									<ModalForm />
								</p>
							</Card>
							<Card className={classes.hoverstyle}>
								<LaptopChromebookIcon style={customStyle} />
								<h2
									style={{
										fontSize: "12px",

										textAlign: "center",
									}}>
									+ Meeting
								</h2>
							</Card>

							<Card className={classes.hoverstyle}>
								{/* <Link to="/page3" style={{ color: "black" }}> */}
								<PostAdd style={customStyle} />

								<h2
									style={{
										fontSize: "12px",

										textAlign: "center",
										color: "blue",
										cursor: "pointer",
									}}>
									<ViewStudy />
								</h2>
								{/* </Link> */}
							</Card>

							<Card className={classes.hoverstyle}>
								{/* <Link to="/student/assignment"> */}
								<HelpOutlineIcon style={customStyle} />
								<p
									style={{
										fontSize: "12px",

										textAlign: "center",
										color: "blue",
										cursor: "pointer",
									}}>
									<QuizModal />
								</p>
								{/* </Link> */}
							</Card>
							<Card className={classes.hoverstyle}>
								<Link
									to="/student/perform"
									style={{
										color: "blue",
										fontWeight: "400",
										textDecoration: "none",
									}}>
									<Stars style={customStyle} />
									<h2
										style={{
											fontSize: "12px",

											textAlign: "center",
										}}>
										View <br></br>Grade
									</h2>
								</Link>
							</Card>
						</Paper>
					</Fade>
				)}
			</Popper>

			<Grid container justify="left">
				<NotificationModal
					style={{
						marginRight: "20px",
						padding: "1px",
						color: "grey",
						cursor: "pointer",
					}}
				/>
				<Grid item>
					<OfflineBolt
						onClick={handleClick("bottom-end")}
						variant="contained"
						style={{
							cursor: "pointer",
						}}></OfflineBolt>
				</Grid>
				{/* <BarChartIcon /> */}
			</Grid>
		</div>
	);
}

// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import Popper from "@material-ui/core/Popper";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";

// import CreateClassroomForm from "./CreateClassroomForm";

// const options_row_1 = ["Course", "Submission", "Meeting"];
// const options_row_2 = ["Batch", "Add Student", "Task Action 1"];
// const options_row_3 = ["Take Action 2", "Assignment"];

// export default function CreateClassroom() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(0);
//   const [isCreateClassOpen, setIsCreateClassOpen] = React.useState(false);

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setOpen(false);
//   };

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <Grid container direction="row" alignItems="center">
//       <Grid item xs={12}>
//         <CreateClassroomForm
//           isOpen={isCreateClassOpen}
//           onCloseClick={() => setIsCreateClassOpen(false)}
//         ></CreateClassroomForm>
//         <ButtonGroup
//           variant="contained"
//           color="primary"
//           ref={anchorRef}
//           aria-label="split button"
//         >
//           <Button onClick={() => setIsCreateClassOpen(true)}>
//             Quick Actions
//           </Button>
//           <Button
//             color="primary"
//             size="small"
//             aria-controls={open ? "split-button-menu" : undefined}
//             aria-expanded={open ? "true" : undefined}
//             aria-label="select merge strategy"
//             aria-haspopup="menu"
//             onClick={handleToggle}
//           >
//             <ArrowDropDownIcon />
//           </Button>
//         </ButtonGroup>
//         <Popper
//           open={open}
//           anchorEl={anchorRef.current}
//           role={undefined}
//           transition
//           disablePortal
//         >
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{
//                 transformOrigin:
//                   placement === "bottom" ? "center top" : "center bottom",
//                   opacity: 1,
//                   marginRight: "9vw",

//               }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                   <MenuList id="split-button-menu1">
//                   <div id="split-button-menu1-display1">
//                     {options_row_1.map((option, index) => (
//                       <div id="quick-actions-rectangle1">
//                         <MenuItem

//                         >
//                           <div id="quick-actions-circle1">
//                             <img src={require('../images/Mask.png')}></img>
//                           </div>
//                           <div id="quick-actions-text1">
//                             {option}
//                           </div>

//                         </MenuItem>
//                       </div>
//                     ))}
//                   </div>
//                   <div id="split-button-menu1-display2">
//                     {options_row_2.map((option, index) => (
//                       <div id="quick-actions-rectangle2">
//                         <MenuItem

//                         >
//                           <div id="quick-actions-circle2">
//                             <img src={require('../images/Mask.png')}></img>
//                           </div>

//                           <div id="quick-actions-text2">
//                             {option}
//                           </div>
//                         </MenuItem>
//                       </div>
//                     ))}
//                   </div>
//                   <div id="split-button-menu1-display3">
//                      {options_row_3.map((option, index) => (
//                       <div id="quick-actions-rectangle3">
//                         <MenuItem

//                         >
//                           <div id="quick-actions-circle3">
//                             <img src={require('../images/Mask.png')}></img>
//                           </div>
//                           <div id="quick-actions-text3">
//                             {option}
//                           </div>
//                         </MenuItem>
//                       </div>
//                     ))}
//                   </div>

//                   </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </Grid>
//     </Grid>
//   );
// }
