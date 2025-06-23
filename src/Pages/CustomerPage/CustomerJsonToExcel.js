import * as XLSX from "xlsx";
// import { data } from "./data";

export const customerJsonToExcel = (data) => {
  delete data.id;
  const sheetData = [
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
    },
  ];
  const machineDetails = data.sales_machineDetails;
  machineDetails.map((machine) => {
    delete machine.id;
    delete machine.created_on;
    delete machine.created_by;
    delete machine.edited_on;
    delete machine.edited_by;
  });

  const serviceDetails = data.service_contract_details;
  serviceDetails.map((service) => {
    delete service.id;
    delete service.created_on;
    delete service.created_by;
    delete service.edited_on;
    delete service.edited_by;
  });

  const calibrationDetails = data.calibration_contract_details;
  calibrationDetails.map((calibration) => {
    delete calibration.id;
    delete calibration.created_on;
    delete calibration.created_by;
    delete calibration.edited_on;
    delete calibration.edited_by;
  });

  const sheet1Data = machineDetails;
  const sheet2Data = serviceDetails;
  const sheet3Data = calibrationDetails;

  // Convert data to worksheet format
  // let sheet = XLSX.utils.json_to_sheet(sheetData);
  // const a1 = { t: "s", v: "NAME" };
  // const b1 = { t: "s", v: "EMAIL" };
  // const c1 = { t: "s", v: "PHONE" };
  // sheet = { ...sheet, A1: a1, B1: b1, C1: c1 };
  // sheet["!cols"] = [
  //   { wch: 15 }, // Width for the first column (NAME)
  //   { wch: 25 }, // Width for the second column (EMAIL)
  //   { wch: 15 }, // Width for the third column (PHONE)
  // ];

  // let sheet1 = XLSX.utils.json_to_sheet(sheet1Data);
  // const ma1 = { t: "s", v: "SOLD TO PARTY" };
  // const mb1 = { t: "s", v: "MODEL" };
  // const mc1 = { t: "s", v: "MACHINE NUMBER" };
  // const md1 = { t: "s", v: "SALES DATE (MM/DD/YYYY)" };

  // const me1 = { t: "s", v: "WARRANTY PERIOD" };
  // const mf1 = { t: "s", v: "STAMPING DATE (MM/DD/YYYY)" };
  // const mg1 = { t: "s", v: "FEES" };
  // const mh1 = { t: "s", v: "EXPENSES" };

  // const mi1 = { t: "s", v: "FUTURE VISITS" };
  // const mj1 = { t: "s", v: "YEARLY VISIT" };
  // const mk1 = { t: "s", v: "HALF YEARLY VISIT" };
  // const ml1 = { t: "s", v: "QUARTERLY VISIT" };
  // const mm1 = { t: "s", v: "MONTHLY VISIT" };
  // const mn1 = { t: "s", v: "MACHINE SPECIFICATIONS" };
  // sheet1 = {
  //   ...sheet1,
  //   A1: ma1,
  //   B1: mb1,
  //   C1: mc1,
  //   D1: md1,
  //   E1: me1,
  //   F1: mf1,
  //   G1: mg1,
  //   H1: mh1,
  //   I1: mi1,
  //   J1: mj1,
  //   K1: mk1,
  //   L1: ml1,
  //   M1: mm1,
  //   N1: mn1,
  // };

  // Set column widths
  // sheet1["!cols"] = [
  //   { wch: 15 }, // Width for the first column (SOLD TO PARTY)
  //   { wch: 10 }, // Width for the second column (MODEL)
  //   { wch: 20 }, // Width for the third column (MACHINE NUMBER)
  //   { wch: 28 }, // Width for the first column (SALES DATE (MM/DD/YYYY))
  //   { wch: 15 }, // Width for the second column (WARRANTY PERIOD)
  //   { wch: 28 }, // Width for the third column (STAMPING DATE (MM/DD/YYYY))
  //   { wch: 10 }, // Width for the first column (FEES)
  //   { wch: 10 }, // Width for the second column (EXPENSES)
  //   { wch: 15 }, // Width for the third column (FUTURE VISITS)
  //   { wch: 15 }, // Width for the first column (YEARLY VISIT)
  //   { wch: 15 }, // Width for the second column (HALF YEARLY VISIT)
  //   { wch: 15 }, // Width for the third column (QUARTERLY VISIT)
  //   { wch: 15 }, // Width for the third column (MONTHLY VISIT)
  //   { wch: 30 }, // Width for the third column (MACHINE SPECIFICATIONS)
  // ];

  // console.log(
  //   "customerJsonToExcel ...................................",
  //   sheet1.A1,
  //   sheet1
  // );

  const sheet = XLSX.utils.json_to_sheet(sheetData);
  const sheet1 = XLSX.utils.json_to_sheet(sheet1Data);
  const sheet2 = XLSX.utils.json_to_sheet(sheet2Data);
  const sheet3 = XLSX.utils.json_to_sheet(sheet3Data);

  // Create a workbook and append worksheets
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, sheet, "Initial");
  XLSX.utils.book_append_sheet(workbook, sheet1, "Machines");
  XLSX.utils.book_append_sheet(workbook, sheet2, "Services");
  XLSX.utils.book_append_sheet(workbook, sheet3, "Calibrations");

  const fileName = `${data.name} Details.xlsx`;
  // Export the workbook as an Excel file
  //   XLSX.writeFile(workbook, "CustomerList.xlsx");
  XLSX.writeFile(workbook, fileName);
};
