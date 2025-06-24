import React, { useRef, useState } from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import * as XLSX from "xlsx";
import { generateId } from "../../utils/common";
import RenderTooltip from "../../components/common/RenderToolTipComp";

const ExcelToJson = ({ pageData, setPageData }) => {
  const [jsonData, setJsonData] = useState(null);
  const inputRef = useRef(null);

  const handleFileUpload = (event) => {
    // console.log("....................... ", pageData);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetsData = {};
      workbook.SheetNames.forEach((sheetName) => {
        const sheet = workbook.Sheets[sheetName];
        let processedSheetName = sheetName;

        if (sheetName === "Machines") {
          processedSheetName = "sales_machineDetails";
        }
        if (sheetName === "Services") {
          processedSheetName = "service_contract_details";
        }
        if (sheetName === "Calibrations") {
          processedSheetName = "calibration_contract_details";
        }

        sheetsData[processedSheetName] = XLSX.utils.sheet_to_json(sheet);
      });

      const initialData = sheetsData.Initial;
      let initialObj = {
        name: initialData[0].name,
        email: initialData[0].email,
        phone: initialData[0].phone,
      };
      const machineData = sheetsData.sales_machineDetails;
      const serviceData = sheetsData.service_contract_details;
      const calibrationData = sheetsData.calibration_contract_details;

      const pM = machineData.map((machine) => {
        const stampingDate = new Date(machine.current_stamping_date);
        const saleDate = new Date(machine.sale_date);
        return {
          ...machine,
          id: generateId(),
          current_stamping_date: stampingDate,
          sale_date: saleDate,
        };
      });
      const pS = serviceData.map((service) => {
        const stampingDate = new Date(service.current_stamping_date);
        const startDate = new Date(service.amc_start_date);
        const endDate = new Date(service.amc_end_date);
        return {
          ...service,
          id: generateId(),
          current_stamping_date: stampingDate,
          amc_start_date: startDate,
          amc_end_date: endDate,
        };
      });
      const pC = calibrationData.map((calibration) => {
        const stampingDate = new Date(calibration.current_stamping_date);
        const startDate = new Date(calibration.calibration_start_date);
        const endDate = new Date(calibration.calibration_end_date);
        return {
          ...calibration,
          id: generateId(),
          current_stamping_date: stampingDate,
          calibration_start_date: startDate,
          calibration_end_date: endDate,
        };
      });

      const processedSheetsData = {
        ...sheetsData,
        sales_machineDetails: [...pM],
        service_contract_details: [...pS],
        calibration_contract_details: [...pC],
      };

      const newSheetData = {
        ...initialObj,
        ...processedSheetsData,
        id: generateId(),
      };
      // const newSheetData = { ...initialObj, ...sheetsData, id: generateId() };

      delete newSheetData.Initial;

      // setJsonData(newSheetData);
      const hasData = (obj) => Object.keys(obj).length > 0;
      const copiedPageData = [...pageData];
      const newPageData = [...copiedPageData, newSheetData];

      console.log(
        "during ........ ",
        newPageData,
        newSheetData,
        processedSheetsData
      );

      if (hasData(newPageData)) {
        setPageData(newPageData);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<RenderTooltip text="New customer from excel" />}
      >
        <Button
          variant="success"
          htmlFor="fileInput"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <PiMicrosoftExcelLogoThin size={20} className="mx-1" />
          Load from Excel
        </Button>
      </OverlayTrigger>
      <input
        id="fileInput"
        ref={inputRef}
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      {/* {jsonData && (
        <pre style={{ textAlign: "left" }}>
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )} */}
    </>
  );
};

export default ExcelToJson;
