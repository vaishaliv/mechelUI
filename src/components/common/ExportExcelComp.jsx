import React from "react";
import ExportToExcel from "./ExportToExcel";
import { Button } from "react-bootstrap";

const ExportExcelComp = ({ title, data, setShowReminder }) => {
  return (
    <>
      {/* <h1 className="text-info">{title}</h1> */}
      <div className="d-flex justify-content-end">
        <Button
          variant="outline-info"
          className="mb-2 mx-2 text-light"
          onClick={() => setShowReminder(true)}
        >
          Show Reminder List
        </Button>
        <ExportToExcel data={data} />
      </div>
    </>
  );
};

export default ExportExcelComp;
