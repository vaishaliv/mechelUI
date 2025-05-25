import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import about1 from "../../assets/about1.webp";
import about2 from "../../assets/about2.webp";
import about3 from "../../assets/about3.webp";
import CommonHeader from "../../components/common/CommonHeader";

const PageData = [
  {
    id: 1,
    img: about1,
    title: "LICENSE HOLDERS",
    body: "From Legal Metrology, Government of Maharashtra to Manufacture, Serve and Deal in Electronic Weighing Systems. Most of our Models are approved by Government of India, Ministry of Food & Consumer affairs, department of Consumer affairs. With these approvals, we are equipped to cater to the entire Industry and Commercial Segments. ",
  },
  {
    id: 2,
    img: about2,
    title: "TEAM - INDUSTRIAL WEIGHING",
    body: "With more than 20 plus years of experience in Industrial Weighing Industry, this team is ready and experienced to execute any Weighing solution that Client needs.",
  },
  {
    id: 3,
    img: about3,
    title: "QUALITY GUARANTEED",
    body: "Our Focus and Goal is to provide optimum & high-quality Solution, whether its a design, a product or a service that aligns with your company's needs. No matter the budget, we pride ourselves in providing professional customer services. We guarantee, you will be satisfied with our work.",
  },
];

const About = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // console.log("Breakpoint...", width, breakpoint, width > breakpoint);

  if (width > breakpoint)
    return (
      <Container
        style={{
          marginTop: "2rem",
          backgroundColor: "black",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <CommonHeader title="About us" />
        {PageData.map((data, i) => (
          <Row xs={1} md={2} className="g-4" key={data.id}>
            <Col className="w-100 mb-5" key={data.id}>
              <Card>
                <Row className="h-100">
                  {data.id !== 2 && (
                    <Col>
                      <Card.Img variant="top" src={data.img} style={{height:'60vh'}} />
                    </Col>
                  )}
                  <Col>
                    <Card.Body className="text-info align-text-middle">
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>{data.body}</Card.Text>
                    </Card.Body>
                  </Col>
                  {data.id === 2 && (
                    <Col>
                      <Card.Img variant="top" src={data.img} style={{height:'60vh'}}/>
                    </Col>
                  )}
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    );
  if (width < breakpoint)
    return (
      <Container
        style={{
          marginTop: "2rem",
          backgroundColor: "black",
          overflowX: "hidden",
          // overflowY: "hidden",
        }}
      >
        <CommonHeader title="About us" />
        {PageData.map((data, i) => (
          <Card className="mb-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.img} style={{height:'40vh'}}/>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
};

export default About;
