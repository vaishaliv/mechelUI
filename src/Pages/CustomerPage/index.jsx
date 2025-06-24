import React from "react";
import { Container } from "react-bootstrap";
import CommonHeader from "../../components/common/CommonHeader";
import CustomerList from "./CustomerList";
import ExportToExcelWithWorkBooks from "./ExportToExcelWithWorkBooks";
import ExcelCustomer from "./ExcelCustomer";
import ExcelToJson from "./ExcelToJson";
import { CustomerProvider } from "../../Contexts/CustomerContext";

const CustomerPage = () => {
  return (
    <Container className="w-100" 
    // style={{ height: "100vh" }}
    >
      <CommonHeader title="" topMargin="6rem" innerMargin="2rem" />
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </Container>
  );
};

export default CustomerPage;
