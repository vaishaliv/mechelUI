import * as XLSX from "xlsx";
import { data } from "./data";
import { generateId } from "../../utils/common";

export const exportToExcel = (data) => {
  // Example data for multiple worksheets
  const sheetData = [
    {
      id: generateId(),
      name: data[0].name,
      email: data[0].email,
      phone: data[0].phone,
    },
  ];
  const sheet1Data = data[0].sales_machineDetails;
  const sheet2Data = data[0].service_contract_details;
  const sheet3Data = data[0].calibration_contract_details;
  // Convert data to worksheet format
  const sheet = XLSX.utils.json_to_sheet(sheetData);
  const sheet1 = XLSX.utils.json_to_sheet(sheet1Data);
  const sheet2 = XLSX.utils.json_to_sheet(sheet2Data);
  const sheet3 = XLSX.utils.json_to_sheet(sheet3Data);

  // Create a workbook and append worksheets
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, "Initial");
  XLSX.utils.book_append_sheet(workbook, sheet1, "Machines");
  XLSX.utils.book_append_sheet(workbook, sheet2, "Services");
  XLSX.utils.book_append_sheet(workbook, sheet2, "Calibrations");

  // Export the workbook as an Excel file
  XLSX.writeFile(workbook, "CustomerList.xlsx");
};

const ExcelCustomer = () => {
  return (
    <div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExcelCustomer;
