import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import CommonHeader from "../../components/common/CommonHeader";

const CardData = [
  {
    id: 1,
    image: card1,
    destination: "https://ehp.de/en/home/",
    title:
      "Crane Weighing for Foundry and other heavy Industries from EHP Germany.",
    body1:
      "We are Channel associates of EHP INDIA (Chennai), which represents EHP, Germany, offering solutions in AUTOMATION, REMOTE AND WIRELESS solutions.",
    body2:
      "Crane Scales can be directly communicated with client's existing ERP through EHP Software and Hardware Solutions.",
    body3: "",
  },
  {
    id: 2,
    image: card2,
    // destination: "https://ehp.de/en/home/",
    title: "Industrial Weighing Solutions",
    body1:
      "The Weighing Industry has been going through many challenges because of fast changing technological innovations. Clients are some times left with costly existing Products or          which can not be discarded. This is where we can offer solutions. Without having to completely scrap the existing systems, we can offer upgrades or totally new concepts or designs in the area of Data capturing, analyzing and Storing.",
    body2:
      "We cover Logistics, Heavy, Chemical and Pharma industries offering weighing solutions.",
    body3: "",
  },
  {
    id: 3,
    image: card3,
    destination: "https://www.ravas.com/en-gb",
    title:
      " Pallet Scales and Forklift Safety Scales for Pharma and Other Industries",
    body1:
      "We are Channel associates of RAVAS INDIA (Chennai), which represents RAVAS, Netherlands, offering solutions in Pallet and Forklift Weighing.",
    body2:
      "We offer ATEX approved Explosion Proof Stainless Steel Pallet Scales especially for Pharma Industry.",
    body3:
      "Measurement and transfer of Weight data to other devices is possible.",
  },
];

const SolutionsComp = () => {
  return (
    <div>
      <div className="mt-5">
        <CommonHeader title="Solutions" />
      </div>
      <Row
        className="m-3"
        xs={1}
        md={2}
        lg={3}
        style={{
          display: "flex",
          // height: "100vh",
        }}
      >
        {CardData.map((data, i) => (
          <Col variant="dark" key={data.id}>
            <Card
              className="mx-2 p-2"
              style={{
                width: "",
                backgroundColor: "black",
                color: "aliceblue",
              }}
            >
              <Card.Title
                style={{
                  height: "90px",

                  fontSize: "largest",
                  fontWeight: "lighter",
                }}
              >
                {data.title}
              </Card.Title>
              <Card.Img variant="top" src={data.image}></Card.Img>
              <Card.Body>
                <Card.Text
                  style={{
                    fontWeight: "lighter",
                  }}
                >
                  {data.body1}
                  {data.body2}
                  {data.body3 && data.body3}{" "}
                </Card.Text>
              </Card.Body>

              <Card.Body>
                <Button className="text-uppercase">Find Out More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SolutionsComp;
