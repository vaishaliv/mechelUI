import React, { useState } from "react";
import {
  Button,
  Card,
  Carousel,
  Container,
  OverlayTrigger,
  Stack,
  Tooltip,
} from "react-bootstrap";
import {
  AddCalibrationBody,
  AddMachineBody,
  AddServiceBody,
} from "../Modal/ModalBody";
import {
  AddCalibrationFooter,
  AddMachineFooter,
  AddServiceFooter,
} from "../Modal/ModalFooter";
import { FcSalesPerformance, FcServices } from "react-icons/fc";
import { MdArrowCircleRight, MdCompassCalibration } from "react-icons/md";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";
import { BsArrowBarRight } from "react-icons/bs";
import {
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { LiaFirstdraft } from "react-icons/lia";
import AddInitialBody from "./AddInitialBody";
import AddInitialFooter from "./AddInitialFooter";
import RenderTooltip from "../../../components/common/RenderToolTipComp";

const AddNewCustomer = ({ modalShow, handleClose }) => {
  const [submitMachine, setSubmitMachine] = useState(true);
  const [submitService, setSubmitService] = useState(true);
  const [submitCalibration, setSubmitCalibration] = useState(true);
  const [index, setIndex] = useState(0);

  const handleMachineSubmit = () => {
    if (!submitMachine) setSubmitMachine(false);
  };
  const handleServiceSubmit = () => {
    if (!submitService) setSubmitService(false);
  };
  const handleCalibrationSubmit = () => {
    if (!submitCalibration) setSubmitCalibration(false);
  };

  const data = [
    {
      id: 0,
      head: "Initial Screen",
      body: (
        <AddInitialBody
          handleClose={handleClose}
          handleSubmit={handleMachineSubmit}
        />
      ),
      foot: (
        <AddInitialFooter
          handleClose={handleClose}
          handleSubmit={handleMachineSubmit}
        />
      ),
    },
    {
      id: 1,
      head: "Machine Screen",
      body: <AddMachineBody />,
      foot: (
        <AddMachineFooter
          handleClose={handleClose}
          handleSubmit={handleMachineSubmit}
        />
      ),
    },
    {
      id: 2,
      head: "Service Screen",
      body: <AddServiceBody />,
      foot: (
        <AddServiceFooter
          handleClose={handleClose}
          handleSubmit={handleServiceSubmit}
        />
      ),
    },
    {
      id: 3,
      head: "Calibration Screen",
      body: <AddCalibrationBody />,
      foot: (
        <AddCalibrationFooter
          handleClose={handleClose}
          handleSubmit={handleCalibrationSubmit}
        />
      ),
    },
  ];

  // const RenderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     {props.text}
  //   </Tooltip>
  // );

  return (
    <Container className="" style={{ color: "aliceblue" }}>
      <div>
        <Card
          className="w-100 d-flex justify-content-center top-0"
          style={{
            backgroundColor: "skyblue",
          }}
        >
          <div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text="Initial Screen" />}
            >
              <Button
                variant={index === 0 ? "light" : "outline-primary"}
                className="border-0"
                onClick={() => setIndex(0)}
              >
                <LiaFirstdraft
                  size={80}
                  style={{
                    border: "2px solid white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </Button>
            </OverlayTrigger>

            <MdArrowCircleRight className="text-light mx-2" size={40} />

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text=" Machine Screen" />}
            >
              <Button
                variant={index === 1 ? "light" : "outline-primary"}
                className="border-0"
                onClick={() => setIndex(1)}
              >
                <FcSalesPerformance
                  size={80}
                  style={{
                    border: "2px solid white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </Button>
            </OverlayTrigger>

            <MdArrowCircleRight className="text-light mx-2" size={40} />
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text=" Service Screen" />}
            >
              <Button
                variant={index === 2 ? "light" : "outline-primary"}
                className="border-0"
                onClick={() => setIndex(2)}
              >
                <FcServices
                  size={80}
                  style={{
                    border: "2px solid white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              </Button>
            </OverlayTrigger>

            <MdArrowCircleRight className="text-light" size={40} />

            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={<RenderTooltip text=" Calibration Screen" />}
            >
              <Button
                variant={index === 3 ? "light" : "outline-primary"}
                className="border-0"
                onClick={() => setIndex(3)}
              >
                <Button
                  variant="outline-warning btn-no-hover"
                  style={{ border: 0 }}
                >
                  <MdCompassCalibration
                    size={80}
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      padding: "10px",
                      outline: 0,
                    }}
                  />
                </Button>
              </Button>
            </OverlayTrigger>
          </div>
        </Card>
        <Card
          className="w-100"
          style={{
            backgroundColor: "skyblue",
            alignItems: "center",
          }}
        >
          {data.map((d) => (
            <div key={d.id}>
              {d.id === index && (
                <Card
                  className="w-100"
                  style={{
                    backgroundColor: "skyblue",
                    alignItems: "center",
                  }}
                >
                  <Card.Body style={{ height: "68vh" }}>
                    <div className="d-flex justify-content-between ">
                      <h4 className="text-light">{d.head}</h4>
                      <div className="mb-3">{d.foot}</div>
                    </div>
                    {d.body}
                  </Card.Body>
                </Card>
              )}
            </div>
          ))}
        </Card>
      </div>
    </Container>
  );
};

export default AddNewCustomer;
