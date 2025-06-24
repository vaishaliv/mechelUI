import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
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

const ServiceTable = ({ serviceDetailsData }) => {
  const {
    pageData,
    setPageData,
    selectedCustomer,
    editedService,
    setEditedService,
    setEditServiceFlag,
    setDeletedService,
    setDeletedServiceFlag,
    setSelectedService,
    setServiceFlag,
    serviceFlag,
    selectedService,
  } = useContext(CustomerContext);
  const [serviceData, setServiceData] = useState(serviceDetailsData);

  const [openTimer, setOpenTimer] = useState(false);
  const [isElapsed, setElapsed] = useState(false);
  const [timerArr, setTimerArray] = useState([]);
  const handleSetElapsed = (flag) => setElapsed(flag);

  const handleCloseTimer = () => setOpenTimer(false);

  useEffect(() => {
    const dummyServiceData = [...serviceDetailsData];
    if (selectedCustomer) {
      const indexCustomer = pageData.findIndex(
        (obj) => obj.id === selectedCustomer.id
      );
      const indexService = dummyServiceData.findIndex(
        (obj) => obj.id === editedService.id
      );
      if (indexService !== -1) {
        dummyServiceData[indexService] = editedService;
        setServiceData(dummyServiceData);
        const copiedPageData = [...pageData];
        copiedPageData[indexCustomer].service_contract_details[indexService] =
          editedService;
        console.log("SERVICE tABLE .....", serviceData, copiedPageData);

        setPageData(copiedPageData);
      }
    }
  }, [editedService]);

  const handleTimerClick = (service) => {
    setSelectedService(service);
    if (service.current_stamping_date) setOpenTimer(true);

    const getMaxNum = () => {
      if (!service.future_visit) return 1;

      if (service.monthly_visit) {
        return 12;
      } else {
        if (service.yearly_visit) return 1;
        if (service.half_yearly_visit) return 2;
        if (service.quarterly_visit) return 3;
      }
      return 1;
    };
    const maxNum = getMaxNum();
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
    const myArr = getDateSet(service.current_stamping_date, maxNum);
    console.log("service tABLE .....", myArr);
    setTimerArray(myArr);
  };
  const getVisitOptions = () => {
    return "Yearly Visit";
  };
  const TimerHead = () => (
    <div className="d-flex justify-content-between">
      <span>{`Customer:${selectedService.sold_to_party}`}</span>
      <span className="mx-5">{`Last Stamping Date: ${selectedService.current_stamping_date.toDateString()}`}</span>
      <span className="mx-5">{`Selected Visit Options: ${getVisitOptions()}`}</span>
    </div>
  );
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

  console.log("Service tABLE .....", serviceData, editedService);

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
            {/* <th>Make</th> */}
            <th>Number</th>
            <th>Stamping Date</th>
            <th>AMC Start Date</th>
            <th>AMC End Date</th>
            {/* <th>Government Fees</th> */}
            {/* <th>Stamping Fees</th> */}
            {/* <th>Future Visit</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serviceData &&
            serviceData.map((service) => {
              return (
                <>
                  <tr key={service.id}>
                    <td>
                      <Button
                        variant="light"
                        className="p-1 cursor-pointer"
                        onClick={() => {
                          setEditedService(service);
                          setEditServiceFlag((prev) => !prev);
                        }}
                      >
                        <BiEditAlt />
                      </Button>
                      <Button
                        className="p-1 mx-1 cursor-pointer"
                        variant="light"
                        onClick={() => {
                          setDeletedService(service);
                          setDeletedServiceFlag((prev) => !prev);
                        }}
                      >
                        <MdDelete />
                      </Button>
                    </td>

                    <td>{service.sold_to_party}</td>
                    <td>{service.contract_no}</td>
                    <td>{service.id_num}</td>
                    <td>{service.current_stamping_date?.toDateString()}</td>
                    <td>{service.amc_start_date?.toDateString()}</td>
                    <td>{service.amc_end_date?.toDateString()}</td>

                    <td>
                      <Button
                        variant="light"
                        onClick={() => {
                          handleTimerClick(service);
                        }}
                      >
                        <IoTimer size={15} />
                      </Button>
                      <Button
                        variant="light"
                        onClick={() => {
                          setSelectedService(service);
                          setServiceFlag((prev) => !prev);
                        }}
                      >
                        ...
                      </Button>
                    </td>
                  </tr>
                  {serviceFlag && service.id === selectedService.id && (
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
                                      {service.stamping_fees}
                                    </Card.Body>
                                  </Card>
                                </Col>
                                <Col>
                                  <Card className="m-2 mx-2 mt-5">
                                    <Card.Header>Stamping Expenses</Card.Header>
                                    <Card.Body>
                                      {service.stamping_expenses}
                                    </Card.Body>
                                  </Card>
                                </Col>
                              </Row>
                              <Row className="mb-2">
                                <Col>
                                  <Card className="m-2 mx-2 mt-3 mb-2">
                                    <Card.Header>Make</Card.Header>
                                    <Card.Body>{service.make}</Card.Body>
                                  </Card>
                                </Col>
                                <Col>
                                  <Card className="m-2 mx-2 mt-3 mb-2">
                                    <Card.Header>Model</Card.Header>
                                    <Card.Body>{service.model}</Card.Body>
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
                                      checked={service.yearly_visit}
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
                                      checked={service.half_yearly_visit}
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
                                      checked={service.quarterly_visit}
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
                                      checked={service.monthly_visit}
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
export default ServiceTable;
