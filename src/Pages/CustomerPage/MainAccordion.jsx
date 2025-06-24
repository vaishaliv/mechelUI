import { Accordion, Button, OverlayTrigger } from "react-bootstrap";
import { CgAdd } from "react-icons/cg";
import MachineTable from "./MachineTable";
import ServiceTable from "./ServiceTable";
import CalibrationTable from "./CalibrationTable";
import { FcSalesPerformance, FcServices } from "react-icons/fc";
import { MdCompassCalibration } from "react-icons/md";
import { useContext } from "react";
import CustomerContext from "../../Contexts/CustomerContext";
import RenderTooltip from "../../components/common/RenderToolTipComp";

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
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<RenderTooltip text="Click for machine details" />}
        >
          <Accordion.Header>
            <div variant="outline-warning" className="outline-0 border-0 mx-2">
              <FcSalesPerformance size={20} />
            </div>
            Sales - Machine Details
          </Accordion.Header>
        </OverlayTrigger>

        <Accordion.Body>
          <div className="mb-1">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text="Add new machine" />}
            >
              <Button
                variant="outline-primary"
                onClick={() => setAddNewMachineFlag((prev) => !prev)}
              >
                <CgAdd />
              </Button>
            </OverlayTrigger>
          </div>
          <MachineTable machineDetailsData={machineDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<RenderTooltip text="CLick for service details" />}
        >
          <Accordion.Header>
            <div variant="outline-warning" className="outline-0 border-0 mx-2">
              <FcServices size={20} />
            </div>
            Services - Contract Details
          </Accordion.Header>
        </OverlayTrigger>

        <Accordion.Body>
          <div className="mb-1">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text="Add new service" />}
            >
              <Button
                variant="outline-primary"
                onClick={() => {
                  console.log("Button clicked");
                  setAddNewServiceFlag((prev) => !prev);
                }}
              >
                <CgAdd />
              </Button>
            </OverlayTrigger>
          </div>
          <ServiceTable serviceDetailsData={serviceDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<RenderTooltip text="CLick for calibration details" />}
        >
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
        </OverlayTrigger>

        <Accordion.Body>
          <div className="mb-1">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text="Add new calibration" />}
            >
              <Button
                variant="outline-primary"
                onClick={() => setAddNewCalibrationFlag((prev) => !prev)}
              >
                <CgAdd />
              </Button>
            </OverlayTrigger>
          </div>
          <CalibrationTable calibrationDetailsData={calibrationDetailsData} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MainAccordion;
