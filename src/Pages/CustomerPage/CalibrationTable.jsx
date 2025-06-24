import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Table,
} from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { GrActions } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import CustomerContext from "../../Contexts/CustomerContext";
import { IoTimer } from "react-icons/io5";
import { CustomerModal } from "./CustomerModal";
import { toISOString } from "../../utils/common";
import NewCountdownTimer from "./NewCountdownTimer";
import RenderTooltip from "../../components/common/RenderToolTipComp";

const CalibrationTable = ({ calibrationDetailsData }) => {
  const {
    pageData,
    setPageData,
    selectedCustomer,
    editedCalibration,
    setEditedCalibration,
    setEditCalibrationFlag,
    setDeletedCalibration,
    setDeletedCalibrationFlag,
    setSelectedCalibration,
    setCalibrationFlag,
    calibrationFlag,
    selectedCalibration,
  } = useContext(CustomerContext);

  const [calibrationData, setCalibrationData] = useState(
    calibrationDetailsData
  );

  const [openTimer, setOpenTimer] = useState(false);
  const [isElapsed, setElapsed] = useState(false);
  const [timerArr, setTimerArray] = useState([]);
  const handleSetElapsed = (flag) => setElapsed(flag);

  const handleCloseTimer = () => setOpenTimer(false);

  useEffect(() => {
    const dummyCalibrationData = [...calibrationDetailsData];
    if (selectedCustomer) {
      const indexCustomer = pageData.findIndex(
        (obj) => obj.id === selectedCustomer.id
      );
      const indexCalibration = dummyCalibrationData.findIndex(
        (obj) => obj.id === editedCalibration.id
      );
      if (indexCalibration !== -1) {
        dummyCalibrationData[indexCalibration] = editedCalibration;
        setCalibrationData(dummyCalibrationData);
        const copiedPageData = [...pageData];
        copiedPageData[indexCustomer].calibration_contract_details[
          indexCalibration
        ] = editedCalibration;
        console.log("CALIBRATION tABLE .....", calibrationData, copiedPageData);

        setPageData(copiedPageData);
      }
    }
  }, [editedCalibration]);

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

      // console.log("???????????????????????????????", someDate, d, copyDate);
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

  const handleTimerClick = (calibration) => {
    setSelectedCalibration(calibration);
    if (calibration.current_stamping_date) setOpenTimer(true);

    const getMaxNum = () => {
      if (!calibration.future_visit) return 1;

      if (calibration.monthly_visit) {
        return 12;
      } else {
        if (calibration.yearly_visit) return 1;
        if (calibration.half_yearly_visit) return 2;
        if (calibration.quarterly_visit) return 3;
      }
      return 1;
    };
    const maxNum = getMaxNum();
    const myArr = getDateSet(calibration.current_stamping_date, maxNum);
    console.log("Calibration tABLE .....", maxNum, myArr);
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

  const getVisitOptions = () => {
    return "Yearly Visit";
  };
  const TimerHead = () => (
    <div className="d-flex justify-content-between">
      <span>{`Customer:${selectedCalibration.sold_to_party}`}</span>
      <span className="mx-5">{`Last Stamping Date: ${selectedCalibration.current_stamping_date.toDateString()}`}</span>
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
        <thead>
          <tr>
            <th>
              <GrActions />
            </th>
            <th>Party</th>
            <th>Contract No</th>
            <th>Stamping Date</th>
            <th>Start Date</th>
            <th>End Date</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {calibrationData &&
            calibrationData.map((calibration) => {
              return (
                <>
                  <tr key={calibration.id}>
                    {/* ---- */}
                    <td>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<RenderTooltip text="Edit calibration" />}
                      >
                        <Button
                          variant="light"
                          onClick={() => {
                            setEditedCalibration(calibration);
                            setEditCalibrationFlag((prev) => !prev);
                          }}
                        >
                          <BiEditAlt />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<RenderTooltip text="Delete calibration" />}
                      >
                        <Button
                          className=" cursor-pointer"
                          variant="light"
                          onClick={() => {
                            setDeletedCalibration(calibration);
                            setDeletedCalibrationFlag((prev) => !prev);
                          }}
                        >
                          <MdDelete />
                        </Button>
                      </OverlayTrigger>
                    </td>

                    <td>{calibration.sold_to_party}</td>
                    <td>{calibration.contract_no}</td>

                    <td>{calibration.current_stamping_date?.toDateString()}</td>
                    <td>
                      {calibration.calibration_start_date?.toDateString()}
                    </td>
                    <td>{calibration.calibration_end_date?.toDateString()}</td>

                    <td>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<RenderTooltip text="Open reminder" />}
                      >
                        <Button
                          variant="light"
                          onClick={() => {
                            handleTimerClick(calibration);
                          }}
                        >
                          <IoTimer size={15} />
                        </Button>
                      </OverlayTrigger>
                      <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 250, hide: 400 }}
                        overlay={<RenderTooltip text="Calibration details" />}
                      >
                        <Button
                          variant="light"
                          onClick={() => {
                            setSelectedCalibration(calibration);
                            setCalibrationFlag((prev) => !prev);
                          }}
                        >
                          ...
                        </Button>
                      </OverlayTrigger>
                    </td>
                  </tr>
                  {calibrationFlag &&
                    calibration.id === selectedCalibration.id && (
                      <tr>
                        <td colSpan={9}>
                          <Row>
                            <Col>
                              <Col>
                                <Card>
                                  <Row>
                                    <Col>
                                      <Card className="m-2 mx-2 mt-5">
                                        <Card.Header>Number</Card.Header>
                                        <Card.Body>
                                          {calibration.id_num}
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                    <Col>
                                      <Card className="m-2 mx-2 mt-5">
                                        <Card.Header>
                                          Stamping Expenses
                                        </Card.Header>
                                        <Card.Body>
                                          {calibration.stamping_expenses}
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  </Row>
                                  <Row className="mb-2">
                                    <Col>
                                      <Card className="m-2 mx-2 mt-3 mb-2">
                                        <Card.Header>Make</Card.Header>
                                        <Card.Body>
                                          {calibration.make}
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                    <Col>
                                      <Card className="m-2 mx-2 mt-3 mb-2">
                                        <Card.Header>Model</Card.Header>
                                        <Card.Body>
                                          {calibration.model}
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  </Row>
                                </Card>
                              </Col>
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
                                        checked={calibration.yearly_visit}
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
                                        checked={calibration.half_yearly_visit}
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
                                        checked={calibration.quarterly_visit}
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
                                        checked={calibration.monthly_visit}
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

export default CalibrationTable;
