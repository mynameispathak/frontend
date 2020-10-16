import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AddEventForm from "./form";
import { Add } from "@material-ui/icons";

function MyVerticallyCenteredModal(props) {
	const [backendData, setBackendData] = useState({});

	function sendDatatoBackend() {
		// integrate send data to backend here
		console.log("data to be sent to backend ", backendData);
	}

	function updateData(data) {
		setBackendData(data);
	}

	function handleUpdate() {
		props.onHide();
		sendDatatoBackend();
	}

	return (
		<Modal
			{...props}
			size="40vw"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>

				<Modal.Title id='contained-modal-title-vcenter'>
					Create New Event

				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<AddEventForm sendData={updateData} />
			</Modal.Body>
			{/* <Modal.Footer>
            <Button onClick={handleUpdate}>Update</Button>
          </Modal.Footer> */}
		</Modal>
	);
}

export default function AddEventModal() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
			{/* <Button variant='primary' onClick={() => setModalShow(true)}>
				Add Event
			</Button> */}
			<Button
				variant="contained"
				onClick={() => setModalShow(true)}
				style={{
					backgroundColor: "#FFDD42",
					marginRight: "10px",
					fontSize: "14px",
				}}>
				Add Event
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	);
}
