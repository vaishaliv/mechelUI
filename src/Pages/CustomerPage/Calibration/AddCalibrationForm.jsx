import { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { IoIosRefreshCircle } from "react-icons/io";
import { generateId } from "../../../utils/common";
import UserContext from "../../../Contexts/UserContext";

export const AddCalibrationForm = ({
  handleClose,
  newCalibration,
  setNewCalibration,
  selectedCustomer,
  pageData,
  setPageData,
}) => {
  const [validated, setValidated] = useState(false);
  const [body, setBody] = useState({});
  const [stampingDate, setStampingDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const partyRef = useRef(null);
  const modelRef = useRef(null);
  const machineIdRef = useRef(null);
  const specificationsRef = useRef(null);
  const warrantyRef = useRef(null);
  const stampingExpensesRef = useRef(null);
  const stampingFeesRef = useRef(null);
  const futureVisitRef = useRef(null);
  const yearlyVisitRef = useRef(null);
  const halfYearlyVisitRef = useRef(null);
  const quarterlyVisitRef = useRef(null);
  const monthlyVisitRef = useRef(null);
  const idNumRef = useRef(null);
  const contractNoRef = useRef(null);
  const makeRef = useRef(null);

  const { userProfile } = useContext(UserContext);
  const created_by = userProfile?.name;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const initialObj = {
      [partyRef.current?.name]: partyRef.current?.value,
      [modelRef.current?.name]: modelRef.current?.value,
      [machineIdRef.current?.name]: machineIdRef.current?.value,
      [specificationsRef.current?.name]: specificationsRef.current?.value,
      calibration_start_date: stampingDate,
      calibration_end_date: startDate,
      current_stamping_date: endDate,
      [makeRef.current?.name]: makeRef.current?.value,
      [idNumRef.current?.name]: idNumRef.current?.value,
      [contractNoRef.current?.name]: contractNoRef.current?.value,
      [stampingExpensesRef.current?.name]: stampingExpensesRef.current?.value,
      [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
      [futureVisitRef.current?.name]: futureVisitRef.current?.checked,
      [halfYearlyVisitRef.current?.name]: halfYearlyVisitRef.current?.checked,
      [yearlyVisitRef.current?.name]: yearlyVisitRef.current?.checked,
      [quarterlyVisitRef.current?.name]: quarterlyVisitRef.current?.checked,
      [monthlyVisitRef.current?.name]: monthlyVisitRef.current?.checked,
      createdOn: formattedDate,
      createdOnRaw: today,
      created_by
    };
    setNewCalibration(initialObj);
    console.log(initialObj, "Initial New Customer Obj");
    console.log("submit....Add Service Form.....", partyRef.current?.value);
    setBody(initialObj);
    setValidated(true);

    let copiedPageData = [...pageData];
    if (selectedCustomer) {
      const indexCustomer = pageData.findIndex(
        (obj) => obj.id === selectedCustomer.id
      );
      // const count =
      //   copiedPageData[indexCustomer].calibration_contract_details.length;
      const newCalibrationWithId = { ...initialObj, id: generateId() };
      const calibrationArray = [
        ...copiedPageData[indexCustomer].calibration_contract_details,
        newCalibrationWithId,
      ];
      copiedPageData[indexCustomer].calibration_contract_details =
        calibrationArray;
    }

    const hasData = (obj) => Object.keys(obj).length > 0;

    if (hasData(initialObj)) {
      setPageData(copiedPageData);
    }
  };

  console.log("Add Calibration Form.....", pageData);
  return (
    <Form
      className="px-2"
      validated={validated}
      onSubmit={handleSubmit}
      style={{ height: "66vh" }}
    >
      <div className="d-flex justify-content-end">
        <Button
          variant="outline-success"
          onClick={() => console.log("Refresh")}
        >
          <IoIosRefreshCircle size={30} />
        </Button>
        <Button className="mx-2" type="submit">
          Submit
        </Button>
      </div>
      <Row className="pt-5">
        <Col style={{ borderRight: "1px solid aliceblue" }} className="px-5">
          <Form.Group controlId={1} className="mb-3">
            <Form.Label>{"Sold to Party"}</Form.Label>
            <Form.Control
              name="sold_to_party"
              ref={partyRef}
              required
              type="text"
              className="w-100"
              onClick={(e) => e.target.select()}
            />
            <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col>
              <Form.Group controlId={2} className="mb-4">
                <Form.Label>{"ID Number"}</Form.Label>
                <Form.Control
                  name="id_num"
                  ref={idNumRef}
                  required
                  type="text"
                  className=""
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Form.Group controlId={2} className="mb-4">
                <Form.Label>{"Contract Number"}</Form.Label>
                <Form.Control
                  name="contract_no"
                  ref={contractNoRef}
                  required
                  type="text"
                  className=""
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId={3} className="mb-4">
                <Form.Label>{"Make"}</Form.Label>
                <Form.Control
                  name="make"
                  ref={makeRef}
                  required
                  type="text"
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={3} className="mb-4">
                <Form.Label>{"Model"}</Form.Label>
                <Form.Control
                  name="model"
                  ref={modelRef}
                  required
                  type="text"
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId={5} className="mb-4">
                <Form.Label>{"Stamping Fees"}</Form.Label>
                <Form.Control
                  name="stamping_fees"
                  ref={stampingFeesRef}
                  required
                  type="number"
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={6} className="mb-4">
                <Form.Label>{"Stamping Expenses"}</Form.Label>
                <Form.Control
                  name="stamping_expenses"
                  ref={stampingExpensesRef}
                  required
                  type="number"
                  onClick={(e) => e.target.select()}
                />
                <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col className="py-3">
              <div
                className="form-check p-2 w-100 text-start rounded mb-1"
                style={{
                  border: "1px solid aliceblue",
                  width: "70% !important",
                }}
              >
                <div
                  className="mb-3"
                  style={{ borderBottom: "1px solid aliceblue" }}
                >
                  <input
                    type="checkbox"
                    label="Future Visit?"
                    name="future_visit"
                    ref={futureVisitRef}
                    defaultChecked
                    value={futureVisitRef.current?.checked}
                  />
                  <label
                    className="form-check-label mx-3 fs-4"
                    htmlFor="flexCheckChecked"
                  >
                    Future Visit?
                  </label>
                </div>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Yearly Visit"
                      ref={yearlyVisitRef}
                      id="yearly_visit"
                      name="selectFutureVisitsOption"
                      defaultChecked
                      value={yearlyVisitRef.current?.checked}
                    />
                    <Form.Check
                      type="radio"
                      label="Half Yearly Visit"
                      ref={halfYearlyVisitRef}
                      id="half_yearly_visit"
                      name="selectFutureVisitsOption"
                      value={halfYearlyVisitRef.current?.checked}
                    />
                    <Form.Check
                      type="radio"
                      label="Quarterly Visit"
                      ref={quarterlyVisitRef}
                      id="quarterly_visit"
                      name="selectFutureVisitsOption"
                      value={quarterlyVisitRef.current?.checked}
                    />
                    <Form.Check
                      type="radio"
                      label="Monthly Visit"
                      ref={monthlyVisitRef}
                      id="monthly_visit"
                      name="selectFutureVisitsOption"
                      value={monthlyVisitRef.current?.checked}
                    />
                  </Col>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId={9}>
                <Form.Label className="">Current Stamping Date</Form.Label>
                <div>
                  <DatePicker
                    name="current_stamping_date"
                    required
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    selected={stampingDate}
                    onChange={(date) => setStampingDate(date)}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId={10}>
                <Form.Label className="">Calibration Start Date</Form.Label>
                <div>
                  <DatePicker
                    name="calibration_start_date"
                    required
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId={10}>
                <Form.Label className="">Calibration End Date</Form.Label>
                <div>
                  <DatePicker
                    name="calibration_end_date"
                    required
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCalibrationForm;
