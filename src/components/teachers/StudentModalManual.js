import React from "react";
import { Modal } from "react-bootstrap";
import {
	makeStyles,
	TextField,
	Button,
	Grid,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
} from "@material-ui/core";


const useStyles = makeStyles({
	root: {
		maxWidth: 200,
	},
	table: {
		minWidth: 650,
	},
	subjectName: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24px",
	},
	textField: {
		display: "flex",
		flexWrap: "wrap",
	},
});

export default function AddStudentManuallyModal(props) {
	const classes = useStyles();
	return (
		<Modal
			{...props}
			size="md"
			autoDetectWindowHeight={false}
			autoScrollBodyContent={false}
			contentStyle={{ width: "100vw", maxWidth: "none" }}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Students - Enter email addresses
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Grid
					container
					direction="row"
					alignItems="center"
					justify="center"
					style={{ minHeight: "50px" }}>
					<Grid item xs={12}>
						<div style={{ fontSize: 16 }}>Enter emails separated by commas</div>
						<div className={classes.textField}>
							<div style={{ width: "95%" }}>
								<TextField
									id="standard-full-width"
									label="Emails"
									style={{ margin: 8 }}
									fullWidth
									multiline
									margin="none"
									rows={4}
									size="medium"
									variant="filled"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</div>
						</div>
						<div style={{ fontSize: 16 }}>Select Applicable Batch</div>
						<div style={{ width: "95%" }}>
							<FormControl component="fieldset">
								<RadioGroup
									row
									aria-label="position"
									name="position"
									defaultValue="top">
									<FormControlLabel
										value="A"
										control={<Radio color="primary" />}
										label="Batch A"
									/>
									<FormControlLabel
										value="B"
										control={<Radio color="primary" />}
										label="Batch B"
									/>
									<FormControlLabel
										value="C"
										control={<Radio color="primary" />}
										label="Batch C"
									/>
									<FormControlLabel
										value="D"
										control={<Radio color="primary" />}
										label="Batch D"
									/>
									<FormControlLabel
										value="E"
										control={<Radio color="primary" />}
										label="Batch E"
									/>
								</RadioGroup>
							</FormControl>
						</div>
					</Grid>
				</Grid>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
				<Button onClick={props.onHide} style={{ backgroundColor: "#ffdd42" }}>
					Create
				</Button>
			</Modal.Footer>
		</Modal>
	);
}