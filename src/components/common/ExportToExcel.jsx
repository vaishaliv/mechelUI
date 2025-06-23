import React from "react";
import { Button } from "react-bootstrap";
import * as XLSX from "xlsx";

const data1 = [
  { Name: "John Doe", Age: 28, City: "New York" },
  { Name: "Jane Smith", Age: 34, City: "Los Angeles" },
  { Name: "Sam Wilson", Age: 23, City: "Chicago" },
];
const ExportToExcel = ({ data }) => {
  const exportToExcel = () => {
    // Convert JSON data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "DataExport.xlsx");
  };

  return (
    <div>
      <Button variant="info" className="mb-2 text-light" onClick={exportToExcel}>Export to Excel</Button>
    </div>
  );
};

export default ExportToExcel;
