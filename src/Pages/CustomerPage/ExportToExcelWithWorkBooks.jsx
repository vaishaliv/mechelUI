import * as XLSX from "xlsx";

const exportToExcel = () => {
  // Example data for multiple worksheets
  const sheet1Data = [
    { Name: "Alice", Age: 25, City: "Pune" },
    { Name: "Bob", Age: 30, City: "Mumbai" },
  ];

  const sheet2Data = [
    { Product: "Laptop", Price: 50000, Quantity: 2 },
    { Product: "Phone", Price: 20000, Quantity: 5 },
  ];

  // Convert data to worksheet format
  const sheet1 = XLSX.utils.json_to_sheet(sheet1Data);
  const sheet2 = XLSX.utils.json_to_sheet(sheet2Data);

  // Create a workbook and append worksheets
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet1, "Users");
  XLSX.utils.book_append_sheet(workbook, sheet2, "Products");

  // Export the workbook as an Excel file
  XLSX.writeFile(workbook, "MultiSheetData.xlsx");
};

const ExportToExcelWithWorkBooks = () => {
  return (
    <div>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default ExportToExcelWithWorkBooks;
