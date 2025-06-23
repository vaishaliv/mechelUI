import { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { IoIosRefreshCircle } from "react-icons/io";
import UserContext from "../../../Contexts/UserContext";

export const EditServiceForm = ({ setEditedService, handleClose, data }) => {
  console.log("edit service...", data);
  const [validated, setValidated] = useState(false);
  const [body, setBody] = useState({});
  const [amcStartDate, setAmcStartDate] = useState(data.amc_start_date);
  const [amcEndDate, setAmcEndDate] = useState(data.amc_end_date);
  // const [salesDate, setSalesDate] = useState(
  //   data.sale_date?.toDateString()
  // );
  const [stampingDate, setStampingDate] = useState(data.current_stamping_date);
  const partyRef = useRef(null);
  const modelRef = useRef(null);
  const machineIdRef = useRef(null);
  const specificationsRef = useRef(null);
  // const salesDateRef = useRef(null);
  const stampingDateRef = useRef(null);
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
  const amcStartDateRef = useRef(null);
  const amcEndDateRef = useRef(null);

  const { userProfile } = useContext(UserContext);
  const modified_by = userProfile?.name;

  const handleSubmit = (event) => {
    console.log("HandleSubmit Called");

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
      id: data.id,

      [partyRef.current?.name]: partyRef.current?.value,
      [modelRef.current?.name]: modelRef.current?.value,
      // [machineIdRef.current?.name]: machineIdRef.current?.value,
      // [specificationsRef.current?.name]: specificationsRef.current?.value,
      current_stamping_date: stampingDate,
      amc_start_date: amcStartDate,
      amc_end_date: amcEndDate,
      [makeRef.current?.name]: makeRef.current?.value,
      [idNumRef.current?.name]: idNumRef.current?.value,
      [contractNoRef.current?.name]: contractNoRef.current?.value,
      [stampingExpensesRef.current?.name]: stampingExpensesRef.current?.value,
      [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
      [futureVisitRef.current?.name]: futureVisitRef.current?.checked,
      [halfYearlyVisitRef.current?.id]: halfYearlyVisitRef.current?.checked,

      [yearlyVisitRef.current?.id]: yearlyVisitRef.current?.checked,
      [quarterlyVisitRef.current?.id]: quarterlyVisitRef.current?.checked,
      [monthlyVisitRef.current?.id]: monthlyVisitRef.current?.checked,

      modified_on: formattedDate,
      modified_on_row: today,
      modified_by,
    };
    console.log("submit....Edit Service Form.....", initialObj);
    setBody(initialObj);
    setEditedService(initialObj);
    setValidated(true);
  };

  console.log("edited Service.....", body);
  return (
    <Form
      className="px-2"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ height: "60vh" }}
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
      <Row className="mt-5">
        <Col style={{ borderRight: "1px solid aliceblue" }} className="px-5">
          <Form.Group controlId={1} className="mb-4">
            <Form.Label>{"Sold to Party"}</Form.Label>
            <Form.Control
              name="sold_to_party"
              placeholder={data.sold_to_party}
              defaultValue={data.sold_to_party}
              ref={partyRef}
              required
              type="text"
              className="w-100"
              // onChange={() => console.log(partyRef.current?.value)}
              onClick={(e) => e.target.select()}
            />
            <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Col>
              {" "}
              <Form.Group controlId={2} className="mb-4">
                <Form.Label>{"ID Number"}</Form.Label>
                <Form.Control
                  name="id_num"
                  ref={idNumRef}
                  placeholder={data.id_num}
                  defaultValue={data.id_num}
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
                  placeholder={data.contract_no}
                  defaultValue={data.contract_no}
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
                  placeholder={data.make}
                  defaultValue={data.make}
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
                  placeholder={data.model}
                  defaultValue={data.model}
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
                  placeholder={data.stamping_fees}
                  defaultValue={data.stamping_fees}
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
                  placeholder={data.stamping_expenses}
                  defaultValue={data.stamping_expenses}
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
                    checked={
                      data.future_visit
                        ? data.future_visit.value
                        : futureVisitRef.current?.checked
                    }
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
                    selected={
                      stampingDate
                        ? stampingDate
                        : data.current_stamping_date.toDateString()
                    }
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    onChange={(date) => setStampingDate(date)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId={10}>
                <Form.Label className="">AMC Start Date</Form.Label>
                <div>
                  <DatePicker
                    name="amc_start_date"
                    selected={
                      amcStartDate
                        ? amcStartDate
                        : data.amc_start_date.toDateString()
                    }
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    onChange={(date) => setAmcStartDate(date)}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId={10}>
                <Form.Label className="">AMC End Date</Form.Label>
                <div>
                  <DatePicker
                    name="amc_end_date"
                    selected={
                      amcEndDate ? amcEndDate : data.amc_end_date.toDateString()
                    }
                    className="form-control w-100 p-1"
                    dateFormat="dd/MM/yyyy" // Restricts format to date only
                    placeholderText="Select a date"
                    showPopperArrow={false}
                    isClearable
                    onChange={(date) => setAmcEndDate(date)}
                    onClick={(e) => e.target.select()}
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

export default EditServiceForm;
