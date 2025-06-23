import * as XLSX from "xlsx";
// import {data} from './data'

const exportToExcel = () => {
  // Example complex array of objects
  const data = {
    sheet1: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
    ],
    sheet2: [
      { product: "Laptop", price: 1000 },
      { product: "Phone", price: 500 },
    ],
  };

  // Convert each array into a worksheet
  const workbook = XLSX.utils.book_new();
  Object.keys(data).forEach((sheetName) => {
    const worksheet = XLSX.utils.json_to_sheet(data[sheetName]);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  });

  // Export the workbook
  XLSX.writeFile(workbook, "ComplexData.xlsx");
};

const ExportToExcelWithWorkBooks11 = () => (
  <div>
    <button onClick={exportToExcel}>Export to Excel</button>
  </div>
);

export default ExportToExcelWithWorkBooks11;
