import { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { IoIosRefreshCircle } from "react-icons/io";
import UserContext from "../../../Contexts/UserContext";

export const EditMachineForm = ({
  setEditedMachine,
  handleClose,
  editedMachine,
}) => {
  const [validated, setValidated] = useState(false);
  const [body, setBody] = useState({});
  const [salesDate, setSalesDate] = useState(editedMachine.sale_date);
  const [stampingDate, setStampingDate] = useState(
    editedMachine.current_stamping_date
  );

  const partyRef = useRef(null);
  const modelRef = useRef(null);
  const machineIdRef = useRef(null);
  const specificationsRef = useRef(null);
  const salesDateRef = useRef(null);
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
      id: editedMachine.id,
      [partyRef.current?.name]: partyRef.current?.value,
      [modelRef.current?.name]: modelRef.current?.value,
      [machineIdRef.current?.name]: machineIdRef.current?.value,
      [specificationsRef.current?.name]: specificationsRef.current?.value,
      sale_date: salesDate,
      "current-stamping-date": stampingDate,
      // [warrantyRef.current?.name]: warrantyRef.current?.value,
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
    console.log("submit....Edit Machine Form.....", initialObj);
    setEditedMachine(initialObj);
    setBody(initialObj);
    setValidated(true);
  };

  console.log("edited Machine.....", body);
  return (
    <>
      <Form
        className="px-2"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
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
        <Row>
          <Col style={{ borderRight: "1px solid aliceblue" }} className="px-5">
            <Form.Group controlId={1} className="mb-3">
              <Form.Label>{"Sold to Party"}</Form.Label>
              <Form.Control
                name="sold_to_party"
                ref={partyRef}
                required
                type="text"
                placeholder={editedMachine?.sold_to_party}
                className="w-100"
                defaultValue={editedMachine?.sold_to_party}
                onClick={(e) => e.target.select()}
              />
              <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={2} className="mb-4">
              <Form.Label>{"Machine Number"}</Form.Label>
              <Form.Control
                name="machine_id"
                ref={machineIdRef}
                required
                type="text"
                className="w-50"
                placeholder={editedMachine?.machine_id}
                defaultValue={editedMachine?.machine_id}
                onClick={(e) => e.target.select()}
              />
              <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId={3} className="mb-4">
                  <Form.Label>{"Model"}</Form.Label>
                  <Form.Control
                    name="model"
                    ref={modelRef}
                    required
                    type="text"
                    placeholder={editedMachine?.model}
                    defaultValue={editedMachine?.model}
                    onClick={(e) => e.target.select()}
                  />
                  <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={4} className="mb-4">
                  <Form.Label>{"Warranty Period"}</Form.Label>
                  <Form.Control
                    name="warranty_period"
                    ref={warrantyRef}
                    required
                    type="number"
                    placeholder={editedMachine?.warranty_period}
                    defaultValue={editedMachine?.warranty_period}
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
                    placeholder={editedMachine?.stamping_fees}
                    defaultValue={editedMachine?.stamping_fees}
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
                    placeholder={editedMachine?.stamping_expenses}
                    defaultValue={editedMachine?.stamping_expenses}
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
                        futureVisitRef.current?.checked
                          ? futureVisitRef?.current?.checked
                          : editedMachine?.future_visit.value
                      }
                      defaultChecked={editedMachine?.future_visit}
                    />
                    <label
                      className="form-check-label mx-3 fs-4"
                      for="flexCheckChecked"
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
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId={9}>
                  <Form.Label className="">Current Stamping Date</Form.Label>
                  <div>
                    <DatePicker
                      name="current_stamping_date"
                      selected={stampingDate}
                      className="form-control w-100 p-1"
                      dateFormat="dd/MM/yyyy" // Restricts format to date only
                      // placeholderText="Select a date"
                      showPopperArrow={false}
                      isClearable
                      onChange={(date) => setStampingDate(date)}
                      placeholderText={editedMachine?.current_stamping_date}
                      default={editedMachine?.current_stamping_date}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId={10}>
                  <Form.Label className="">Sales Date</Form.Label>
                  <div>
                    <DatePicker
                      name="sale_date"
                      selected={salesDate}
                      onChange={(date) => setSalesDate(date)}
                      className="form-control w-100 p-1"
                      dateFormat="dd/MM/yyyy" // Restricts format to date only
                      // placeholderText="Select a date"
                      showPopperArrow={false}
                      isClearable
                      placeholderText={editedMachine?.sale_date}
                      default={editedMachine?.sale_date}
                      onClick={(e) => e.target.select()}
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="px-4">
          <Col className="">
            <Form.Group controlId={7} className="px-2 mb-3">
              <Form.Label>{"Machine Specifications"}</Form.Label>
              <Form.Control
                name="specifications"
                ref={specificationsRef}
                required
                type="text"
                placeholder={editedMachine?.specifications}
                defaultValue={editedMachine?.specifications}
                onClick={(e) => e.target.select()}
                as="textarea"
                rows={5}
              />
              <Form.Control.Feedback>Loos good!</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
};
