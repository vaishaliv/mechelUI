import { useContext, useEffect, useState } from "react";
import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { GrActions } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import CustomerContext from "../../Contexts/CustomerContext";

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

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            <GrActions />
          </th>
          <th>Party</th>
          <th>Contract No</th>
          <th>Make</th>
          <th>Model</th>
          <th>Number</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Stamping Date</th>
          <th>Expenses</th>
          <th>Future Visit</th>
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
                    <Button
                      variant="light"
                      onClick={() => {
                        setEditedCalibration(calibration);
                        setEditCalibrationFlag((prev) => !prev);
                      }}
                    >
                      <BiEditAlt />
                    </Button>
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
                  </td>

                  {/* ------------ */}
                  <td>{calibration.sold_to_party}</td>
                  <td>{calibration.contract_no}</td>
                  <td>{calibration.make}</td>
                  <td>{calibration.model}</td>
                  <td>{calibration.id_num}</td>
                  <td>{calibration.calibration_start_date?.toDateString()}</td>
                  <td>{calibration.calibration_end_date?.toDateString()}</td>
                  <td>{calibration.current_stamping_date?.toDateString()}</td>
                  <td>{calibration.stamping_expenses}</td>
                  <td>
                    <InputGroup className="mb-3">
                      <input
                        type="checkbox"
                        checked={calibration.future_visit}
                        readOnly={true}
                      />
                    </InputGroup>
                  </td>
                  <td>
                    <Button
                      variant="light"
                      onClick={() => {
                        setSelectedCalibration(calibration);
                        setCalibrationFlag((prev) => !prev);
                      }}
                    >
                      ...
                    </Button>
                  </td>
                </tr>
                {calibrationFlag &&
                  calibration.id === selectedCalibration.id && (
                    <tr>
                      <td colSpan={11}>
                        <Card className="p-4 w-50">
                          <Card.Header>Allowed Visits</Card.Header>
                          <Card.Body>
                            <InputGroup className="mb-3 w-50">
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
                            <InputGroup className="mb-3 w-50">
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

                            <InputGroup className="mb-3 w-50">
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

                            <InputGroup className="mb-3 w-50">
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

export default CalibrationTable;
