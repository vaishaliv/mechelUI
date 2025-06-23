import React from "react";
import {
  Badge,
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { toISOString } from "../../utils/common";
import DatePicker from "react-datepicker";
import CountdownTimer from "../../components/common/CountdownTimer";
import NewCountdownTimer from "../../components/common/NewCountdownTimer";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
// import { getDateSet, getMaxNum } from "../../utils/Custtomer";

const CustomerTable = ({
  reminderArr,
  handleReminderArray,
  handleActivateCustomer,
  toggleExpand,
  setToggleExpand,
  incrementCount,
  firstSwitch,
  secondSwitch,
  thirdSwitch,
  fourthSwitch,
  data,
  selectedItem,
  selectedDate,
  selectedIndex,
  setSelectedIndex,
  newDate,
  handleSelectedDate,
  handleShowDesc,
  isElapsed,
  handleSetElapsed,
}) => {
  const getMaxNum = (firstSwitch, secondSwitch, thirdSwitch, fourthSwitch) => {
    if (firstSwitch) return 1;
    if (secondSwitch) return 2;
    if (thirdSwitch) return 3;
    if (fourthSwitch) return 12;
    return 1;
  };
  const getDateSet = (stampingDate, maxNum) => {

  console.log("is date ?????", stampingDate )

    let copyDate = stampingDate;
    let customDate = new Date(stampingDate);
    let arr = [];
    let obj = { last_date: "", name: "", date: "" };

    if (incrementCount === 12) maxNum = 1;
    if (incrementCount === 6) maxNum = 2;
    if (incrementCount === 3) maxNum = 3;
    if (incrementCount === 1) maxNum = 12;

    for (let i = 1; i <= maxNum; i++) {
      const d = toISOString(
        customDate.setMonth(customDate.getMonth() + incrementCount)
      );
      const someDate = new Date(d).toDateString();
      const d_name = new Date(d).toLocaleDateString("default", {
        month: "short",
      });

      console.log("???????????????????????????????", someDate, d, copyDate);
      obj = {
        last_date: copyDate,
        name: d_name,
        date: d,
        someDate,
      };
      arr.push(obj);
    }
    return arr;
  };

  return (
    <Table
      striped
      bordered
      hover
      className="p-5 mb-4"
      style={{ color: "aliceblue", border: "1px solid aliceblue" }}
    >
      <thead>
        <tr>
          <th>Action</th>
          <th>Name</th>
          <th>LastStamping Date</th>
          <th>Next Stamping Date</th>
          <th>Pick a Date</th>
          <th>Timer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => {
          const nd = toISOString(selectedDate);

          const maxNum = getMaxNum();
          const rArr = getDateSet(d.last_stamping_date, maxNum);

          console.log("rArr... Render array...", rArr);

          return (
            <>
              <tr key={i}>
                <td>
                  <Button
                    variant="outline-secondary"
                    onClick={
                      () => handleActivateCustomer(d)
                      // console.log("Client Activate logic goes here...")
                    }
                  >
                    Activate
                  </Button>
                </td>
                <td>{d.name}</td>
                <td>{d.last_stamping_date}</td>
                <td>
                  {newDate && d.id === selectedIndex
                    ? toISOString(newDate)
                    : d.next_stamping_date}
                </td>
                <td>
                  <div
                    className="d-flex justify-content-center w-50"
                    style={{ marginTop: "-1.25rem" }}
                  >
                    <Form style={{ zIndex: 1000 }} className="mx-2 mt-3">
                      <Form.Group controlId="formDatePicker">
                        <DatePicker
                          popperClassName="custom-datepicker-popper" // Add custom class
                          selected={selectedIndex === d.id && selectedDate}
                          onChange={(date) => handleSelectedDate(date, d)}
                          className="form-control w-100 p-1"
                          dateFormat="dd/MM/yyyy"
                          placeholderText="Choose a date"
                          style={{ display: "none" }}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </td>
                <td>
                  <CountdownTimer
                    targetDate={
                      newDate && d.id === selectedIndex
                        ? toISOString(newDate)
                        : d.next_stamping_date
                    }
                  />
                </td>

                {/* --- */}

                <td>
                  <motion.div
                    style={{ cursor: "pointer", outline: 0 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {toggleExpand && d.id === selectedIndex ? (
                      <button
                        className="round-button"
                        onClick={() => {
                          setSelectedIndex(null);
                          setToggleExpand((prev) => !prev);
                          handleShowDesc(d);
                        }}
                      >
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                        >
                          <BsThreeDots
                            onClick={() => {
                              setSelectedIndex(null);
                              setToggleExpand((prev) => !prev);
                              handleShowDesc(d);
                            }}
                          />
                        </motion.div>
                      </button>
                    ) : (
                      <button
                        className="round-button"
                        onClick={() => {
                          setSelectedIndex(d.id);
                          setToggleExpand((prev) => !prev);
                          handleShowDesc(d);
                        }}
                      >
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                        >
                          <BsThreeDotsVertical
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSelectedIndex(d.id);
                              setToggleExpand((prev) => !prev);
                              handleShowDesc(d);
                            }}
                          />
                        </motion.div>
                      </button>
                    )}
                  </motion.div>
                </td>
              </tr>
              {toggleExpand && selectedItem && selectedItem.id === d.id && (
                <tr>
                  <td colSpan={7}>
                    <Row xs={1} md={2} lg={3}>
                      {rArr &&
                        rArr.map((a, i) => (
                          <Col key={i} xs="4">
                            <Card className="w-100 mb-2 ">
                              <Badge
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  alignContent: "center",
                                  float: "right !important",
                                  background: "skyblue !important",
                                }}
                                className="bg-secondary text-center fs-6 rounded-circle start-100 p-2 text-end text-light shadow-lg m-2"
                              >
                                {i + 1}
                              </Badge>
                              {/* {isElapsed && "elapsed"} */}
                              <Card.Body className="text-center">
                                <p className="fs-1 text-success">{a.name}</p>
                                <p>{a.someDate}</p>
                                <NewCountdownTimer
                                  targetDate={a.someDate}
                                  someDate={a.someDate}
                                  handleSetElapsed={handleSetElapsed}
                                  isElapsed={isElapsed}
                                />
                              </Card.Body>
                              <Card.Footer className="d-flex justify-content-between">
                                <Button
                                  variant="outline-warning"
                                  onClick={() =>
                                    console.log("Send email logic goes here!")
                                  }
                                >
                                  Email
                                </Button>
                                <Button
                                  variant="outline-info"
                                  onClick={() =>
                                    console.log(
                                      "activate action logic goes here!"
                                    )
                                  }
                                >
                                  Activate
                                </Button>
                                <Button
                                  variant="outline-success"
                                  onClick={() =>
                                    console.log("Send sms logic goes here!")
                                  }
                                >
                                  SMS
                                </Button>
                              </Card.Footer>
                            </Card>
                          </Col>
                        ))}
                    </Row>
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomerTable;
