import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

const ConfirmDialog = ({
  title,
  activateCustomer,
  handleCloseConfirm,
  body,
}) => {
  return (
    <Card>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal
          show={activateCustomer}
          onHide={handleCloseConfirm}
          className="bg-dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>{body}</Modal.Body>

          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => {
                handleCloseConfirm();
                console.log("Activation Confirmed Logic goes here...");
              }}
            >
              Yes
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleCloseConfirm();
                console.log("Activation Cancellation Logic goes here...");
              }}
            >
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Card>
  );
};

export default ConfirmDialog;
