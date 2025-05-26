import React from "react";
import { Container, Row } from "react-bootstrap";

const CommonHeader = ({ title, topMargin, innerMargin = "0rem" }) => {
  return (
    <Container
      className="w-100 d-flex justify-content-center"
      style={{ marginTop: topMargin }}
    >
      <p
        className="fs-3 text-uppercase"
        style={{ color: "rgb(38, 152, 156)", marginTop: innerMargin }}
      >
        {title}
      </p>
    </Container>
  );
};

export default CommonHeader;
