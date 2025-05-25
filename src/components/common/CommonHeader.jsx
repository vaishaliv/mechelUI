import React from "react";
import { Container, Row } from "react-bootstrap";

const CommonHeader = ({ title }) => {
  return (
    <Container className="w-100 d-flex justify-content-center">
      <p className="fs-3 text-uppercase" style={{ color: "rgb(38, 152, 156)" }}>
        {title}
      </p>
    </Container>
  );
};

export default CommonHeader;
