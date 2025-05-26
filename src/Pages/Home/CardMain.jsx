import React from "react";
import { Card, Button, Container, Image, Row, Col } from "react-bootstrap";
import logo from "../../assets/mainImg.png";

const CardMain = () => {
  return (
    <div>
      <div fluid="true" style={{ position: "relative", overflow: "hidden" }}>
        <Image
          src={logo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Row
          className="justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            color: "white",
          }}
        >
          <Col className="text-center">
            <p
              className=""
              style={{
                color: "aliceblue",
                position: "absolute",
                top: "20%",
                right: "80%",
                fontWeight: "bold",
              }}
            >
              9769909978 / 9892377086
            </p>
            <h1
              style={{
                fontWeight: "900",
                letterSpacing: "0.5rem",
                color: "rgb(38, 152, 156)",
              }}
            >
              BUSINESS VERTICALS
            </h1>
            <h4
              style={{
                fontWeight: "500",
                color: "rgb(38, 152, 156)",
                textAlign: "center",
              }}
            >
              * INDUSTRIAL WEIGHING SOLUTIONS
            </h4>
            <h4
              style={{
                fontWeight: "500",
                color: "rgb(38, 152, 156)",
                textAlign: "center",
              }}
            >
              * INDUSTRIAL AUTOMATION
            </h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CardMain;
