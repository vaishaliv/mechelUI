import React from "react";
import { Button } from "react-bootstrap";

export const AddModalFooter = () => <p>Add New Customer - Foot</p>;
export const EditModalFoot = () => <p>Edit Customer - Foot</p>;

export const DeleteMachineFoot = ({ handleDeleteMachineClose }) => (
  <div>
    <Button
      variant="success"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete YES Machine logic here...");
      }}
    >
      Yes
    </Button>
    <Button
      variant="outline-warning"
      className="mx-2"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete NO Machine logic here...");
      }}
    >
      No
    </Button>
  </div>
);
export const DeleteCustomerFoot = ({ handleDeleteCustomerClose }) => (
  <div>
    <Button
      variant="success"
      onClick={() => {
        handleDeleteCustomerClose();
        console.log("delete YES customer logic here...");
      }}
    >
      Yes
    </Button>
    <Button
      variant="outline-warning"
      className="mx-2"
      onClick={() => {
        handleDeleteCustomerClose();
        console.log("delete NO customer logic here...");
      }}
    >
      No
    </Button>
  </div>
);

export const DeleteCalibrationFooter = ({ handleDeleteMachineClose }) => (
  <div>
    <Button
      variant="success"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete YES Calibration logic here...");
      }}
    >
      Yes
    </Button>
    <Button
      variant="outline-warning"
      className="mx-2"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete NO Calibration logic here...");
      }}
    >
      No
    </Button>
  </div>
);
export const DeleteServiceFooter = ({ handleDeleteMachineClose }) => (
  <div>
    <Button
      variant="success"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete YES Service logic here...");
      }}
    >
      Yes
    </Button>
    <Button
      variant="outline-warning"
      className="mx-2"
      onClick={() => {
        handleDeleteMachineClose();
        console.log("delete NO Service logic here...");
      }}
    >
      No
    </Button>
  </div>
);

export const AddCalibrationFooter = ({
  handleClose,
  handleSubmit,
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        variant="outline-warning"
        className=""
        onClick={() => handleClose()}
      >
        Cancel
      </Button>
      <Button
        variant="outline-success"
        className="mx-2"
        onClick={() => handleClose()}
      >
        Refresh
      </Button>
      <Button
        type="submit"
        variant="primary"
        className=""
        onClick={() => {
          handleSubmit();
          //   const edited = {
          //     [partyRef.current?.name]: partyRef.current?.value,
          //     [machineIdRef.current?.name]: machineIdRef.current?.value,
          //     [modelRef.current?.name]: modelRef.current?.value,
          //     [warrantyRef.current?.name]: warrantyRef.current?.value,
          //     [stampingExpensesRef.current?.name]:
          //       stampingExpensesRef.current?.value,
          //     [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //     [specificationsRef.current?.name]: specificationsRef.current?.value,
          //     [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //     [salesDateRef.current?.name]: salesDateRef.current?.value,
          //     [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          //   };
          //   console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export const EditCalibrationFooter = ({
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button variant="outline-warning" className="">
        Cancel
      </Button>
      <Button variant="outline-success" className="mx-2">
        Refresh
      </Button>
      <Button
        type="submit"
        variant="primary"
        className=""
        onClick={() => {
          // const edited = {
          //   [partyRef.current?.name]: partyRef.current?.value,
          //   [machineIdRef.current?.name]: machineIdRef.current?.value,
          //   [modelRef.current?.name]: modelRef.current?.value,
          //   [warrantyRef.current?.name]: warrantyRef.current?.value,
          //   [stampingExpensesRef.current?.name]:
          //     stampingExpensesRef.current?.value,
          //   [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //   [specificationsRef.current?.name]: specificationsRef.current?.value,
          //   [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //   [salesDateRef.current?.name]: salesDateRef.current?.value,
          //   [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          // };
          // console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export const AddServiceFooter = ({
  handleClose,
  handleSubmit,
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        variant="outline-warning"
        className=""
        onClick={() => handleClose()}
      >
        Cancel
      </Button>
      <Button
        variant="outline-success"
        className="mx-2"
        onClick={() => handleClose()}
      >
        Refresh
      </Button>
      <Button
        type="submit"
        variant="primary"
        className=""
        onClick={() => {
          handleSubmit();
          // const edited = {
          //   [partyRef.current?.name]: partyRef.current?.value,
          //   [machineIdRef.current?.name]: machineIdRef.current?.value,
          //   [modelRef.current?.name]: modelRef.current?.value,
          //   [warrantyRef.current?.name]: warrantyRef.current?.value,
          //   [stampingExpensesRef.current?.name]:
          //     stampingExpensesRef.current?.value,
          //   [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //   [specificationsRef.current?.name]: specificationsRef.current?.value,
          //   [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //   [salesDateRef.current?.name]: salesDateRef.current?.value,
          //   [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          // };
          // console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};
export const EditServiceFooter = ({
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button variant="outline-warning" className="">
        Cancel
      </Button>
      <Button variant="outline-success" className="mx-2">
        Refresh
      </Button>
      <Button
        type="submit"
        variant="primary"
        className=""
        onClick={() => {
          // const edited = {
          //   [partyRef.current?.name]: partyRef.current?.value,
          //   [machineIdRef.current?.name]: machineIdRef.current?.value,
          //   [modelRef.current?.name]: modelRef.current?.value,
          //   [warrantyRef.current?.name]: warrantyRef.current?.value,
          //   [stampingExpensesRef.current?.name]:
          //     stampingExpensesRef.current?.value,
          //   [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //   [specificationsRef.current?.name]: specificationsRef.current?.value,
          //   [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //   [salesDateRef.current?.name]: salesDateRef.current?.value,
          //   [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          // };
          // console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export const AddMachineFooter = ({
  handleClose,
  handleSubmit,
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        variant="outline-warning"
        className=""
        onClick={() => handleClose()}
      >
        Cancel
      </Button>
      <Button
        variant="outline-success"
        className="mx-2"
        onClick={() => handleClose()}
      >
        Refresh
      </Button>
      <Button
        variant="primary"
        type="submit"
        className=""
        onClick={() => {
          handleSubmit();
          // const edited = {
          //   [partyRef.current?.name]: partyRef.current?.value,
          //   [machineIdRef.current?.name]: machineIdRef.current?.value,
          //   [modelRef.current?.name]: modelRef.current?.value,
          //   [warrantyRef.current?.name]: warrantyRef.current?.value,
          //   [stampingExpensesRef.current?.name]:
          //     stampingExpensesRef.current?.value,
          //   [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //   [specificationsRef.current?.name]: specificationsRef.current?.value,
          //   [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //   [salesDateRef.current?.name]: salesDateRef.current?.value,
          //   [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          // };
          // console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};
export const EditMachineFooter = ({
  handleClose,
  partyRef,
  machineIdRef,
  stampingFeesRef,
  stampingExpensesRef,
  modelRef,
  warrantyRef,
  specificationsRef,
  salesDateRef,
  stampingDateRef,
  futureVisitRef,
  yearlyVisitRef,
  halfYearlyVisitRef,
  quarterlyVisitRef,
  monthlyVisitRef,
}) => {
  return (
    <div className="d-flex justify-content-end">
      <Button variant="outline-warning" className="" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="outline-success" className="mx-2" onClick={handleClose}>
        Refresh
      </Button>
      <Button
        type="submit"
        variant="primary"
        className=""
        onClick={() => {
          // const edited = {
          //   [partyRef.current?.name]: partyRef.current?.value,
          //   [machineIdRef.current?.name]: machineIdRef.current?.value,
          //   [modelRef.current?.name]: modelRef.current?.value,
          //   [warrantyRef.current?.name]: warrantyRef.current?.value,
          //   [stampingExpensesRef.current?.name]:
          //     stampingExpensesRef.current?.value,
          //   [stampingFeesRef.current?.name]: stampingFeesRef.current?.value,
          //   [specificationsRef.current?.name]: specificationsRef.current?.value,
          //   [futureVisitRef.current?.name]: futureVisitRef.current?.value,
          //   [salesDateRef.current?.name]: salesDateRef.current?.value,
          //   [stampingDateRef.current?.name]: stampingDateRef.current?.value,
          // };
          // console.log(edited);
        }}
      >
        Submit
      </Button>
    </div>
  );
};
