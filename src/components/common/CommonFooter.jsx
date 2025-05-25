import React from "react";
import { Row } from "react-bootstrap";

const CommonFooter = () => {
  return (
    <Row
      className="text-center p-4"
      style={{
        color: "aliceblue",
        fontSize: "small",
        fontWeight: "lighter",
      }}
    >
      <p>Copyright © 2021 Mechel Systems and Services - All Rights Reserved.</p>
    </Row>
  );
};

export default CommonFooter;
