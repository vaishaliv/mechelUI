import React from "react";
import { Container } from "react-bootstrap";
import CommonHeader from "../../components/common/CommonHeader";
import Customers from "./Customers";
import ExportToExcel from "../../components/common/ExportToExcel";

const Reminders = () => {
  return (
    <Container
      style={{
        backgroundColor: "black",
        color: "aliceblue",
        minHeight: "100vh",
      }}
    >
      <CommonHeader title={"reminders"} topMargin="7rem" />
      <Customers />
    </Container>
  );
};

export default Reminders;
