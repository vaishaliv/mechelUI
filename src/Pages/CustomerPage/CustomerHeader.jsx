import React from "react";
import { Button } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import ExcelToJson from "./ExcelToJson";
import { RiRefreshFill } from "react-icons/ri";

const CustomerHeader = ({ pageData, setPageData, setAddNewFlag }) => {
  console.log("Refresh ..... ", pageData);
  return (
    <div className="mb-2 d-flex justify-content-between">
      <Button onClick={() => setAddNewFlag((prev) => !prev)}>
        <BiAddToQueue /> Add New
      </Button>
      <div>
        <ExcelToJson pageData={pageData} setPageData={setPageData} />
        <Button
          variant="outline-success"
          className="mx-2"
          onClick={() => {
            setPageData(pageData);
            console.log("Refresh ..... ", pageData);
          }}
        >
          <RiRefreshFill size={24} />
        </Button>
      </div>
    </div>
  );
};

export default CustomerHeader;
