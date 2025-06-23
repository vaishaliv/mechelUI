import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import DatePickerComp from "../../components/common/DatePickerComp";
import DatePicker from "react-datepicker";
import { Form, Button, Table, Container, Card, Modal } from "react-bootstrap";
import { TbDoorEnter } from "react-icons/tb";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { dummyContactData as data } from "../../components/common/data/dummyContactData";

const Contacts = ({ rawData = [] }) => {
  //   const data = [
  //   {
  //     id: 1,
  //     name: "Customer 1",
  //     phone: "7738180202",
  //     email: "test@test.com",
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     welcomeEmailFlag: false,
  //     welcomeSMSFlag: true,
  //     last_stamping_date: "2025-05-28T03:00:00",
  //     next_stamping_date: "2025-05-28T03:00:00",
  //     modifiedBy: loginUser.name,
  //   },
  //   {
  //     id: 2,
  //     name: "Customer 2",
  //     phone: "7738180202",
  //     email: "test@test.com",
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     welcomeEmailFlag: false,
  //     welcomeSMSFlag: false,
  //     created_by: "",
  //     modifiedBy: loginUser.name,
  //     modified_date: new Date(),
  //   },
  //   {
  //     id: 3,
  //     name: "Customer 3",
  //     phone: "7738180202",
  //     email: "test@test.com",
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     welcomeEmailFlag: true,
  //     welcomeSMSFlag: false,
  //     created_by: "",
  //     modifiedBy: loginUser.name,
  //     modified_date: new Date(),
  //   },
  //   {
  //     id: 4,
  //     name: "Customer 4",
  //     phone: "7738180202",
  //     email: "test@test.com",
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     welcomeEmailFlag: false,
  //     welcomeSMSFlag: false,
  //     created_by: "",
  //     modifiedBy: loginUser.name,
  //     modified_date: new Date(),
  //   },
  //   {
  //     id: 5,
  //     name: "Customer 5",
  //     phone: "7738180202",
  //     email: "test@test.com",
  //     message:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     welcomeEmailFlag: true,
  //     welcomeSMSFlag: true,
  //     created_by: "",
  //     modifiedBy: loginUser.name,
  //     modified_date: new Date(),
  //   },
  // ];

  const [newData, setNewData] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [reminderQualifying1, setReminderQualifying1] = useState([]);
  const [showReminder, setShowReminder] = useState(true);
  const [toggleRow, setToggleRow] = useState(false);

  useEffect(() => {
    const doThis = () => {
      const reminderQualifying1 = newData.filter(
        (d) => !d.welcomeEmailFlag || !d.welcomeSMSFlag
      );

      console.log("use effect............", reminderQualifying1);
      if (
        reminderQualifying1.length > 0 &&
        !selectedIndex &&
        selectedIndex !== 0
      ) {
        setReminderQualifying1(reminderQualifying1);
        setShowReminder(true);
      } else {
        setReminderQualifying1([]);
        setShowReminder(false);
      }
    };
    doThis();
  }, [selectedIndex]);

  const handleReminderClose = () => setShowReminder(false);
  const handleReminderOpen = () => setShowReminder(true);

  // console.log("F111111111111111111", data, reminderQualifying1, new Date(), newData);
  return (
    <Container style={{ color: "aliceblue" }}>
      <h1>Contact List</h1>

      {showReminder && (
        <Card>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal
              show={showReminder}
              onHide={handleReminderClose}
              style={{ backgroundColor: "rgb(38, 152, 156)" }}
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-info">
                  Send Welcome Email / SMS
                </Modal.Title>
              </Modal.Header>

              {reminderQualifying1.map((data) => (
                <Card className="p-2 m-2 text-center bg-light text-info border-info">
                  <Card.Header>
                    <h3 className="mb-3">{data.name}</h3>

                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                  </Card.Header>
                  <Modal.Body>
                    <div>
                      <p>
                        <FaQuoteLeft className="mb-2 mx-1" /> {data.message}
                        <FaQuoteRight className="mb-3 mx-2" />
                      </p>
                    </div>
                  </Modal.Body>

                  {/* <Modal.Footer> */}
                  <div className="d-flex justify-content-between">
                    <Button
                      className=" w-50"
                      disabled={data.welcomeEmailFlag}
                      variant="outline-secondary"
                      onClick={() => console.log("Send Email", data)}
                    >
                      {data.welcomeEmailFlag ? (
                        <>
                          "Welcome Email sent!"{" "}
                          <span className="badge badge-primary">
                            {data.modifiedBy}
                          </span>
                        </>
                      ) : (
                        "Send Email?"
                      )}
                    </Button>
                    <Button
                      className="mx-2 w-50"
                      disabled={data.welcomeSMSFlag}
                      variant="outline-info"
                      onClick={() => console.log("Send SMS", data)}
                    >
                      {data.welcomeSMSFlag ? "Welcome SMS sent!" : "Send SMS?"}
                    </Button>
                  </div>
                  {/* </Modal.Footer> */}
                </Card>
              ))}
            </Modal>
          </div>
        </Card>
      )}
      <Table
        striped
        bordered
        hover
        className="p-5 mb-4"
        style={{ color: "aliceblue", border: "1px solid aliceblue" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Welcome Email</th>
            <th>Welcome SMS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newData.map((d, i) => {
            return (
              <>
                <tr key={i}>
                  <td>{d.name}</td>
                  <td>{d.phone}</td>
                  <td>{d.email}</td>
                  <td>
                    <input
                      type="checkbox"
                      placeholder="Welcome Email Sent?"
                      checked={d.welcomeEmailFlag}
                      readOnly
                    />
                    <Button
                      disabled={d.welcomeEmailFlag}
                      variant="outline-info"
                      className="mx-2 "
                      onClick={() => console.log("Send email", "email", d)}
                    >
                      {d.welcomeEmailFlag
                        ? "Welcome Email Sent!"
                        : "Send Email?"}
                    </Button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      placeholder="Welcome SMS Sent?"
                      checked={d.welcomeSMSFlag}
                      readOnly
                    />
                    <Button
                      disabled={d.welcomeSMSFlag}
                      variant="outline-success"
                      className="mx-2 "
                      onClick={() => console.log("Send SMS", "sms", d)}
                    >
                      {d.welcomeSMSFlag ? "Welcome SMS Sent!" : "Send SMS?"}
                      Send SMS
                    </Button>
                  </td>
                  <td>
                    {toggleRow && d.id === selectedIndex ? (
                      <button className="round-button">
                        <BsThreeDots
                          size={20}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowReminder(null);
                            setSelectedIndex(0);
                            setToggleRow((prev) => !prev);
                          }}
                        />
                      </button>
                    ) : (
                      <button className="round-button">
                        <BsThreeDotsVertical
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            setShowReminder(null);
                            setSelectedIndex(d.id);
                            setToggleRow((prev) => !prev);
                          }}
                        />
                      </button>
                    )}
                  </td>
                </tr>
                {toggleRow && d.id === selectedIndex ? (
                  <tr className="border-secondary">
                    <td colSpan={6}>
                      <Card className="p-4">{d.message}</Card>
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Contacts;
