import React from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const ReminderPopUp = ({
  id,
  title,
  reminderQualifying,
  showReminder,
  handleReminderClose,
}) => {
  // console.log("-------------------->>>>>", id,title)
  return (
    <Card>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal
          show={showReminder}
          onHide={handleReminderClose}
          className="bg-dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {reminderQualifying.map((data) => (
              <>
                <Row
                  className="mb-2"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <Col>
                    <b>Name:</b>
                  </Col>
                  <Col>{data.name}</Col>
                </Row>
                <Row>
                  <Col>
                    <b>Last Stamping Date:</b>
                  </Col>
                  <Col>{data.last_stamping_date}</Col>
                </Row>
                <Row
                  className="mb-2"
                  style={{ borderBottom: "1px solid grey" }}
                >
                  <Col>
                    <b>Elapsed Date:</b>
                  </Col>
                  <Col>{data.next_stamping_date}</Col>
                </Row>
                {reminderQualifying.length > 1 && <hr />}
              </>
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="success">Email Reminder</Button>
            <Button variant="primary">Send SMS</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Card>
  );
};

export default ReminderPopUp;
