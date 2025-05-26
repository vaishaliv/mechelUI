import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import CommonHeader from "../../components/common/CommonHeader";

const Product = ({
  len,
  pageData,
  selectedSubIndex,
  handleReduceSelectedIndexChange,
  handleSelectedIndexChange,
}) => {
  // console.log("Product...............", pageData, selectedSubIndex);
  return (
    <>
      {pageData.map((data, i) => {
        const subIdx = data.pdf[selectedSubIndex - 1];
        const PreviousButton = (
          <Button
            style={{
              color: "rgb(38, 152, 156)",
              backgroundColor: "black",
              outline: 0,
              border: 0,
            }}
            disabled={selectedSubIndex === 1}
            variant="dark"
            onClick={() => {
              handleReduceSelectedIndexChange(data.id);
            }}
          >
            <p style={{ textDecoration: "none" }}>
              <span style={{ fontWeight: "900" }}>{"< "}</span>
              Previous
            </p>
          </Button>
        );
        const NextButton = (
          <Button
            style={{
              color: "rgb(38, 152, 156)",
              backgroundColor: "black",
              outline: 0,
              border: 0,
            }}
            disabled={selectedSubIndex === len}
            variant="dark"
            onClick={handleSelectedIndexChange}
          >
            <p style={{ textDecoration: "none" }}>
              Next
              <span style={{ fontWeight: "900" }}>{" >"}</span>
            </p>
          </Button>
        );
        const CountSpan = (
          <span
            style={{
              color: "rgb(38, 152, 156)",
              backgroundColor: "black",
              marginTop:'0.3rem'
            }}
          >
            {selectedSubIndex + " / " + data.pdf.length}
          </span>
        );
        const DownloadButton = (
          <Button
            variant="link"
            onClick={() => {
              window.open(data.link, "_blank");
            }}
          >
            {"Download PDF >"}
          </Button>
        );
        const ImageCard = (
          <Card className="w-100">
            <Image src={subIdx && subIdx.img} alt="Product" />
          </Card>
        );
        const TitleCard = (
          <Card
            style={{
              color: "aliceblue",
              backgroundColor: "black",
              outline: 0,
              border: 0,
              marginTop: "3rem",
            }}
          >
            <CommonHeader title={data.title} topMargin="7rem"  />

            <Card.Title
              className="text-center p-2"
              style={{
                color: "rgb(38, 152, 156)",
                fontWeight: "lighter",
                fontSize: "large",
              }}
            >
              {DownloadButton}
            </Card.Title>
          </Card>
        );

        return (
          <>
            <Row variant="dark" key={data.id}>
              {TitleCard}
            </Row>
            <Row>
              <Col className=" p-2 d-flex justify-content-center align-items-center">
                {ImageCard}
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              {PreviousButton}
              {CountSpan}
              {NextButton}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Product;
