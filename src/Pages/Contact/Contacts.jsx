import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import DatePickerComp from "../../components/common/DatePickerComp";
import DatePicker from "react-datepicker";
import {
  Form,
  Button,
  Table,
  Container,
  Card,
  Modal,
  Badge,
  Pagination,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { TbDoorEnter } from "react-icons/tb";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import ExportToExcel from "../../components/common/ExportToExcel";

const Contacts = ({ rawData = [] }) => {
  const [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("USER-PROFILE");
    const loginUser = JSON.parse(data);
    // console.log("First useeffect....", loginUser, loginUser.name);
    setLoginUser(loginUser);
  }, []);

  const data = [
    {
      id: 1,
      name: "Customer 1",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: false,
      welcomeSMSFlag: true,
      last_stamping_date: "2025-05-28T03:00:00",
      next_stamping_date: "2025-05-28T03:00:00",
      modifiedBy: loginUser.name,
    },
    {
      id: 2,
      name: "Customer 2",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: true,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 3,
      name: "Customer 3",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: false,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 4,
      name: "Customer 4",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: false,
      welcomeSMSFlag: false,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 5,
      name: "Customer 5",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: true,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
    {
      id: 6,
      name: "Customer 6",
      phone: "7738180202",
      email: "test@test.com",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      welcomeEmailFlag: true,
      welcomeSMSFlag: true,
      created_by: "",
      modifiedBy: loginUser.name,
      modified_date: new Date(),
    },
  ];

  const [newData, setNewData] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [reminderQualifying1, setReminderQualifying1] = useState([]);
  const [showReminder, setShowReminder] = useState(true);
  const [toggleRow, setToggleRow] = useState(false);
  const [isHistory, setHistory] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const noPerPage = 5;
  let totalPages = Math.round(newData.length / noPerPage);

  useEffect(() => {
    const handleHistoryToggle = () => {
      if (!isHistory) {
        setNewData(data);
      }
      if (isHistory) {
        const historyData = newData.filter(
          (d) => !d.welcomeEmailFlag || !d.welcomeSMSFlag
        );
        setCurrentPage(1);
        setNewData(historyData);
      }
    };
    handleHistoryToggle();
  }, [isHistory]);

  useEffect(() => {
    const reminderQualifying1 = newData.filter(
      (d) => !d.welcomeEmailFlag || !d.welcomeSMSFlag
    );

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
  }, [
    selectedIndex,
    // , newData
  ]);

  const handleUpdateData = (item) => {
    const mData = newData.map((d) =>
      d.id === item.id ? { ...d, modifiedBy: loginUser.name } : d
    );
    // console.log("handleUpdateData called....", mData);
    setNewData(mData);
  };

  const handleReminderClose = () => setShowReminder(false);
  const handleReminderOpen = () => setShowReminder(true);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageData, setPageData] = useState([]);
  // const noPerPage = 5;
  // let totalPages = Math.round(newData.length / noPerPage);

  useEffect(() => {
    const handleHistoryToggle = () => {
      if (!isHistory) {
        setNewData(data);
      }
      if (isHistory) {
        const historyData = newData.filter(
          (d) => !d.welcomeEmailFlag || !d.welcomeSMSFlag
        );
        setNewData(historyData);
      }
    };
    handleHistoryToggle();

    const startIndex = (currentPage - 1) * noPerPage;
    const currentItems = newData.slice(startIndex, startIndex + noPerPage);
    setPageData(currentItems);
  }, [currentPage, isHistory]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const PaginationComp = ({ data, noPerPage, currentPage, onPageChange }) => {
    // let totalPages = Math.round(data.length / noPerPage);
    // const startIndex = (currentPage - 1) * noPerPage;
    // const currentItems = newData.slice(startIndex, startIndex + noPerPage);

    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const renderPaginationItems = () => {
      let items = [];
      //((3/newData.length))
      // console.log("totoal pages...", totalPages);

      for (let number = 1; number <= totalPages; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      return items;
    };

    return (
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );

    /*
     */
  };

  // console.log("F111111111111111111", newData);
  return (
    <Container style={{ color: "aliceblue" }}>
      <div className="d-flex justify-content-between">
        <h1>Contact List</h1>

        <Form className="d-flex justify-content-between p-3 text-success">
          <Form.Check
            className="custom-switch"
            type="switch"
            label="Show History"
            name="reminderSwitch"
            checked={isHistory}
            // onChange={() => {
            // }}
            onChange={() => {
              setHistory((prev) => !prev);
            }}
          />
        </Form>
      </div>

      {showReminder && (
        <Card>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal
              show={showReminder}
              onHide={handleReminderClose}
              className="bg-dark"
              // style={{ backgroundColor: "rgb(38, 152, 156)" }}
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

                    <p>{data.email}</p>
                    <p>{data.phone}</p>
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
                      onClick={() => {
                        console.log("Send EMAIL", data);
                        handleUpdateData(data);
                      }}
                      // onClick={() => console.log("Send Email", data)}
                    >
                      {data.welcomeEmailFlag ? (
                        <>
                          Welcome Email sent!
                          {/* <Badge bg="warning">
                            {" _ "} {data.modifiedBy}
                          </Badge> */}
                        </>
                      ) : (
                        "Send Email?"
                      )}
                    </Button>
                    <Button
                      className="mx-2 w-50"
                      disabled={data.welcomeSMSFlag}
                      variant="outline-info"
                      onClick={() => {
                        console.log("Send SMS", data);
                        handleUpdateData(data);
                      }}
                    >
                      {data.welcomeSMSFlag ? (
                        <>
                          Welcome SMS sent!
                          {/* <Badge bg="warning">
                            {" _ "} {data.modifiedBy}
                          </Badge> */}
                        </>
                      ) : (
                        "Send SMS?"
                      )}
                    </Button>
                  </div>
                  {/* </Modal.Footer> */}
                </Card>
              ))}
            </Modal>
          </div>
        </Card>
      )}
      <ExportToExcel data={newData} />
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
                      onClick={() => {
                        console.log("Send EMAIL", data);
                        handleUpdateData(data);
                      }}
                      // onClick={() => console.log("Send email", "email", d)}
                    >
                      {d.welcomeEmailFlag ? (
                        <>
                          Welcome Email sent!
                          {/* <Badge bg="warning">
                            {" _ "} {data.modifiedBy}
                          </Badge> */}
                        </>
                      ) : (
                        "Send Email?"
                      )}
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
                      onClick={() => {
                        console.log("Send SMS", data);
                        handleUpdateData(data);
                      }}
                      // onClick={() => console.log("Send SMS", "sms", d)}
                    >
                      {d.welcomeSMSFlag ? (
                        <>
                          Welcome SMS sent!
                          {/* <Badge bg="warning">
                            {" _ "} {data.modifiedBy}
                          </Badge> */}
                        </>
                      ) : (
                        "Send SMS?"
                      )}
                    </Button>
                  </td>
                  <td>
                    <motion.div
                      style={{ cursor: "pointer" }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {toggleRow && d.id === selectedIndex ? (
                        <button className="round-button">
                          <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                          >
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
                          </motion.div>
                        </button>
                      ) : (
                        <button className="round-button">
                          <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                          >
                            <BsThreeDotsVertical
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                e.preventDefault();
                                setShowReminder(null);
                                setSelectedIndex(d.id);
                                setToggleRow((prev) => !prev);
                              }}
                            />
                          </motion.div>
                        </button>
                      )}
                    </motion.div>

                    {/* ---------- */}
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
      <div className="mb-4" style={{ float: "right", marginTop: "-1rem" }}>
        <PaginationComp
          data={newData}
          noPerPage={2}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
};

export default Contacts;
