import { Accordion, Button } from "react-bootstrap";
import { CgAdd } from "react-icons/cg";
import MachineTable from "./MachineTable";
import ServiceTable from "./ServiceTable";
import CalibrationTable from "./CalibrationTable";
import { FcSalesPerformance, FcServices } from "react-icons/fc";
import { MdCompassCalibration } from "react-icons/md";
import { useContext } from "react";
import CustomerContext from "../../Contexts/CustomerContext";

function MainAccordion({
  machineDetailsData,
  serviceDetailsData,
  calibrationDetailsData,
}) {
  const {
    setAddNewMachineFlag,
    setAddNewServiceFlag,
    setAddNewCalibrationFlag,
  } = useContext(CustomerContext);

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div variant="outline-warning" className="outline-0 border-0 mx-2">
            <FcSalesPerformance size={20} />
          </div>
          Sales - Machine Details
        </Accordion.Header>
        <Accordion.Body>
          <div className="mb-1">
            <Button
              variant="outline-primary"
              onClick={() => setAddNewMachineFlag((prev) => !prev)}
            >
              <CgAdd />
            </Button>
          </div>
          <MachineTable machineDetailsData={machineDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <div variant="outline-warning" className="outline-0 border-0 mx-2">
            <FcServices size={20} />
          </div>
          Services - Contract Details
        </Accordion.Header>
        <Accordion.Body>
          <div className="mb-1">
            <Button
              variant="outline-primary"
              onClick={() => {
                console.log("Button clicked");
                setAddNewServiceFlag((prev) => !prev);
              }}
            >
              <CgAdd />
            </Button>
          </div>
          <ServiceTable serviceDetailsData={serviceDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <div
            variant="outline-warning"
            className="outline-0 border-0 mx-2"
            style={{ color: "orange" }}
          >
            <MdCompassCalibration size={20} />
          </div>
          Calibration - Contract Details
        </Accordion.Header>
        <Accordion.Body>
          <div className="mb-1">
            <Button
              variant="outline-primary"
              onClick={() => setAddNewCalibrationFlag((prev) => !prev)}
            >
              <CgAdd />
            </Button>
          </div>
          <CalibrationTable calibrationDetailsData={calibrationDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MainAccordion;
