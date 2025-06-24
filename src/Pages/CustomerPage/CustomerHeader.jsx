import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";
import ExcelToJson from "./ExcelToJson";
import { RiRefreshFill } from "react-icons/ri";
import RenderTooltip from "../../components/common/RenderToolTipComp";

const CustomerHeader = ({ pageData, setPageData, setAddNewFlag }) => {
  console.log("Refresh ..... ", pageData);
  return (
    <div className="mb-2 d-flex justify-content-between">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<RenderTooltip text="Add new customer" />}
      >
        <Button onClick={() => setAddNewFlag((prev) => !prev)}>
          <BiAddToQueue /> Add New
        </Button>
      </OverlayTrigger>

      <div>
        <ExcelToJson pageData={pageData} setPageData={setPageData} />
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<RenderTooltip text="Refresh customer list" />}
        >
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
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default CustomerHeader;
