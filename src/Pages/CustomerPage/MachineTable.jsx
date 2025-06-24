import { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { BsTicket, BsTicketPerforatedFill } from "react-icons/bs";
import { GrActions } from "react-icons/gr";
import { IoTimer } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toISOString } from "../../utils/common";
import { FcViewDetails } from "react-icons/fc";
import { CustomerModal } from "./CustomerModal";
import NewCountdownTimer from "./NewCountdownTimer";
import CustomerContext from "../../Contexts/CustomerContext";

const MachineTable = ({ machineDetailsData }) => {
  const {
    newMachine,
    pageData,
    setPageData,
    selectedCustomer,
    editedMachine,
    setEditedMachine,
    setEditMachineFlag,
    setDeletedMachine,
    setDeletedMachineFlag,
    setSelectedMachine,
    setMachineFlag,
    machineFlag,
    selectedMachine,
  } = useContext(CustomerContext);
  const [machineData, setMachineData] = useState(machineDetailsData);
  const [openTimer, setOpenTimer] = useState(false);
  const [isElapsed, setElapsed] = useState(false);
  const [timerArr, setTimerArray] = useState([]);
  const handleSetElapsed = (flag) => setElapsed(flag);

  const handleCloseTimer = () => setOpenTimer(false);

  useEffect(() => {
    const dummyMachineData = [...machineData];
    if (selectedCustomer) {
      const indexCustomer = pageData.findIndex(
        (obj) => obj.id === selectedCustomer.id
      );
      const indexMachine = dummyMachineData.findIndex(
        (obj) => obj.id === editedMachine.id
      );
      if (indexMachine !== -1) {
        dummyMachineData[indexMachine] = editedMachine;
        setMachineData(dummyMachineData);
        const copiedPageData = [...pageData];
        copiedPageData[indexCustomer].sales_machineDetails[indexMachine] =
          editedMachine;
        console.log("MACHINE tABLE .....", machineData, copiedPageData);

        setPageData(copiedPageData);
      }
    }
  }, [editedMachine]);

  const getDateSet = (stampingDate, maxNum) => {
    console.log("is date ?????", stampingDate);

    let copyDate = stampingDate;
    let customDate = stampingDate;
    // let customDate = new Date(stampingDate);
    let arr = [];
    let obj = { last_date: "", name: "", date: "" };

    let incrementCount = 12;
    if (maxNum === 1) incrementCount = 12;
    if (maxNum === 2) incrementCount = 6;
    if (maxNum === 3) incrementCount = 3;
    if (maxNum === 12) incrementCount = 1;

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

  const handleTimerClick = (machine) => {
    setSelectedMachine(machine);
    if (machine.current_stamping_date) setOpenTimer(true);

    const getMaxNum = () => {
      if (!machine.future_visit) return 1;

      if (machine.monthly_visit) {
        return 12;
      } else {
        if (machine.yearly_visit) return 1;
        if (machine.half_yearly_visit) return 2;
        if (machine.quarterly_visit) return 3;
      }
      return 1;
    };

    const maxNum = getMaxNum();
    const myArr = getDateSet(machine.current_stamping_date, maxNum);
    console.log("MACHINE tABLE .....", myArr);
    setTimerArray(myArr);
  };

  const TimerBody = () => {
    if (!timerArr) return <h1>No Data Found!</h1>;
    return (
      <Row xs={1} md={2} lg={3}>
        {timerArr &&
          timerArr.map((a, i) => (
            <Col className="" key={i} xs="4">
              <Card className="w-100 mb-2 ">
                <div
                  className="d-flex text-center justify-content-center m-1"
                  style={{
                    height: "20px",
                    width: "20px",
                    border: "1px solid green",
                    borderRadius: "50%",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "green" }}>
                    {i + 1}
                  </span>
                </div>
                <div className="text-center">
                  <p className="fs-4 text-success">{a.name}</p>
                  <p className="fs-10">{a.someDate}</p>
                  <NewCountdownTimer
                    targetDate={a.someDate}
                    someDate={a.someDate}
                    handleSetElapsed={handleSetElapsed}
                    isElapsed={isElapsed}
                  />
                </div>
                <Card.Footer className="d-flex justify-content-between">
                  <Button
                    variant="outline-warning"
                    onClick={() => console.log("Send email logic goes here!")}
                  >
                    Email
                  </Button>
                  <Button
                    variant="outline-info"
                    onClick={() =>
                      console.log("activate action logic goes here!")
                    }
                  >
                    Activate
                  </Button>
                  <Button
                    variant="outline-success"
                    onClick={() => console.log("Send sms logic goes here!")}
                  >
                    SMS
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    );
  };

  // console.log("MACHINE tABLE .....", newMachine);
  const getVisitOptions = () => {
    return "Yearly Visit";
  };
  const TimerHead = () => (
    <div className="d-flex justify-content-between">
      <span>{`Customer:${selectedMachine.sold_to_party}`}</span>
      <span className="mx-5">{`Last Stamping Date: ${selectedMachine.current_stamping_date.toDateString()}`}</span>
      <span className="mx-5">{`Selected Visit Options: ${getVisitOptions()}`}</span>
    </div>
  );

  return (
    <>
      {openTimer && (
        <CustomerModal
          modalShow={openTimer}
          handleClose={handleCloseTimer}
          header={<TimerHead />}
          body={<TimerBody />}
          footer=""
        />
      )}
      <Table striped bordered hover>
        <thead className="">
          <tr>
            <th className="">
              <GrActions />
            </th>
            <th>Party</th>
            <th>Model</th>
            <th>Machine No</th>
            <th>Sale Date</th>
            <th>Stamping Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {machineData &&
            machineData.map((machine) => {
              return (
                <>
                  <tr key={machine.id}>
                    <td>
                      <Button
                        variant="light"
                        onClick={() => {
                          setEditedMachine(machine);
                          setEditMachineFlag((prev) => !prev);
                        }}
                      >
                        <BiEditAlt />
                      </Button>
                      <Button
                        className=" cursor-pointer"
                        variant="light"
                        onClick={() => {
                          setDeletedMachine(machine);
                          setDeletedMachineFlag((prev) => !prev);
                        }}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                    <td>{machine.sold_to_party}</td>
                    <td>{machine.model}</td>
                    <td>{machine.machine_id}</td>
                    <td>{machine.sale_date?.toDateString()}</td>
                    <td>{machine?.current_stamping_date?.toDateString()}</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => {
                          handleTimerClick(machine);
                        }}
                      >
                        <IoTimer size={15} />
                      </Button>
                      <Button
                        variant="light"
                        onClick={() => {
                          setSelectedMachine(machine);
                          setMachineFlag((prev) => !prev);
                        }}
                      >
                        <FcViewDetails size={15} />
                      </Button>
                    </td>
                  </tr>
                  {machineFlag && machine.id === selectedMachine.id && (
                    <tr>
                      <td colSpan={9}>
                        <Row>
                          <Col>
                            <Card>
                              <Row>
                                <Col>
                                  <Card className="m-2 mx-2 mt-5">
                                    <Card.Header>Stamping Fees</Card.Header>
                                    <Card.Body>
                                      {machine.stamping_fees}
                                    </Card.Body>
                                  </Card>
                                </Col>
                                <Col>
                                  <Card className="m-2 mx-2 mt-5">
                                    <Card.Header>Stamping Expenses</Card.Header>
                                    <Card.Body>
                                      {machine.stamping_expenses}
                                    </Card.Body>
                                  </Card>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Card className="m-2 mx-2 mt-3">
                                    <Card.Header>Warranty Period</Card.Header>
                                    <Card.Body>
                                      {machine.warranty_period}
                                    </Card.Body>
                                  </Card>
                                </Col>
                                <Col>
                                  <Card className="m-2 mx-2 mt-3 mb-3">
                                    <Card.Header>Future Visit?</Card.Header>
                                    <Card.Body>
                                      <input
                                        type="checkbox"
                                        checked={machine.future_visit}
                                        readOnly={true}
                                      />
                                    </Card.Body>
                                  </Card>
                                </Col>
                              </Row>
                            </Card>
                          </Col>
                          <Col>
                            <Card className="p-4 w-100">
                              <Card.Header>Allowed Visits</Card.Header>
                              <Card.Body>
                                <InputGroup className="mb-3 w-100">
                                  <InputGroup.Text id="basic-addon1">
                                    <input
                                      className="mb-2"
                                      type="checkbox"
                                      readOnly={true}
                                      checked={machine.yearly_visit}
                                      title="Yearly Visit"
                                    />
                                  </InputGroup.Text>
                                  <Form.Control
                                    placeholder="Yearly Visit"
                                    readOnly={true}
                                    aria-label="yearlyVisit"
                                  />
                                </InputGroup>
                                <InputGroup className="mb-3 w-100">
                                  <InputGroup.Text id="basic-addon1">
                                    <input
                                      className="mb-2"
                                      type="checkbox"
                                      readOnly={true}
                                      checked={machine.half_yearly_visit}
                                      title="Half Yearly Visit"
                                    />
                                  </InputGroup.Text>
                                  <Form.Control
                                    placeholder="Half Yearly Visit"
                                    readOnly={true}
                                    aria-label="halfYearlyVisit"
                                  />
                                </InputGroup>
                                <InputGroup className="mb-3 w-100">
                                  <InputGroup.Text id="basic-addon1">
                                    <input
                                      className="mb-2"
                                      type="checkbox"
                                      readOnly={true}
                                      checked={machine.quarterly_visit}
                                      placeholder="Quarterly Visit"
                                    />
                                  </InputGroup.Text>
                                  <Form.Control
                                    placeholder="Quarterly Visit"
                                    readOnly={true}
                                    aria-label="quarterlyYearlyVisit"
                                  />
                                </InputGroup>

                                <InputGroup className="mb-3 w-100">
                                  <InputGroup.Text id="basic-addon1">
                                    <input
                                      className="mb-2"
                                      type="checkbox"
                                      readOnly={true}
                                      checked={machine.monthly_visit}
                                      placeholder="Monthly Visit"
                                    />
                                  </InputGroup.Text>
                                  <Form.Control
                                    placeholder="Monthly Visit"
                                    readOnly={true}
                                    aria-label="monthlyYearlyVisit"
                                  />
                                </InputGroup>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col>
                            <Card className="p-4 w-100">
                              <Card.Header>Machine Specifications</Card.Header>
                              <Card.Body>{machine.specifications}</Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default MachineTable;
