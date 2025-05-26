import React from "react";
import { Container, Carousel, Stack, Image } from "react-bootstrap";
import photo1 from "../../assets/about1.webp";
import photo2 from "../../assets/about2.webp";
import photo3 from "../../assets/about3.webp";
import CommonHeader from "../../components/common/CommonHeader";
const PageData = [
  {
    id: 1,
    img: photo1,
    title: "First Slide Label",
    body: "From Ravas. World leader from Pallet Weighing solutions.",
  },
  {
    id: 2,
    img: photo2,
    title: "Second Slide Label",
    body: "CARGO Weighing Solution from MECHEL for Air Cargo Industry",
  },
  {
    id: 3,
    img: photo3,
    title: "Third Slide Label",
    body: "Some description for the third slide.",
  },
];

const Photos = () => {
  return (
    <Container
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <Stack gap={2}>
        <div className="mt-5">
          <CommonHeader title="Our Photo Gallery" topMargin="7rem" />
        </div>
        <Container>
          <Carousel>
            {PageData.map((data) => (
              <Carousel.Item key={data.id}>
                <Image
                  //fluid

                  src={data.img}
                  alt="First slide"
                />
                <Carousel.Caption
                  style={{
                    width: "100%",
                    right: 0,
                    left: 0,
                    // bottom: "1.25rem",
                    // padding: "1rem",
                    backgroundColor: "black",
                    opacity: 0.6,
                    marginBottom: 0,
                  }}
                >
                  <h3>{data.title}</h3>
                  <p>{data.body}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Stack>
    </Container>
  );
};

export default Photos;
