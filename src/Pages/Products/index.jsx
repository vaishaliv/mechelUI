import React, { useState } from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import Product from "./Product";
import product11 from "../../assets/Products/Product1/product1.png";
import product12 from "../../assets/Products/Product1/product2.png";
import product13 from "../../assets/Products/Product1/product3.png";
import product14 from "../../assets/Products/Product1/product4.png";
import product15 from "../../assets/Products/Product1/product5.png";
import product21 from "../../assets/Products/Product2/product1.png";
import product22 from "../../assets/Products/Product2/product2.png";
import product31 from "../../assets/Products/Product3/product1.png";
import product32 from "../../assets/Products/Product3/product2.png";

const PageData1 = [
  {
    id: 1,
    pdf: [
      { id: 1, img: product11 },
      { id: 2, img: product12 },
      { id: 3, img: product13 },
      { id: 4, img: product14 },
      { id: 5, img: product15 },
    ],
    title: "MECHEL ELECTRONIC WEIGHBRIDGE",
    link: "https://img1.wsimg.com/blobby/go/d141a8e3-c1ab-4920-98b6-fe363974ba12/Weigh%20bridge%20-%20Mechel.pdf",
  },
];
const PageData2 = [
  {
    id: 2,
    pdf: [
      { id: 1, img: product21 },
      { id: 2, img: product22 },
    ],
    title: "LOGISTIC SCALE",
    link: "https://blobby.wsimg.com/go/d141a8e3-c1ab-4920-98b6-fe363974ba12/i14%20mcm%20AND%20logistics%20solutions%20brochure.pdf",
  },
];
const PageData3 = [
  {
    id: 3,
    pdf: [
      { id: 1, img: product31 },
      { id: 2, img: product32 },
    ],
    title: "CHECK WEIGHER - STATIC",
    link: "https://img1.wsimg.com/blobby/go/d141a8e3-c1ab-4920-98b6-fe363974ba12/i7%20mcm%20Check%20Weigh%20Indicator.pdf",
  },
];

const Products = () => {
  const [selectedSubIndex1, setselectedSubIndex1] = useState(1);
  const [selectedSubIndex2, setselectedSubIndex2] = useState(1);
  const [selectedSubIndex3, setselectedSubIndex3] = useState(1);

  const handleReduceSelectedIndexChange1 = () => {
    setselectedSubIndex1((prev) => prev - 1);
  };
  const handleReduceSelectedIndexChange2 = () => {
    setselectedSubIndex2((prev) => prev - 1);
  };
  const handleReduceSelectedIndexChange3 = () => {
    setselectedSubIndex3((prev) => prev - 1);
  };
  const handleSelectedIndexChange1 = () => {
    setselectedSubIndex1((prev) => prev + 1);
  };
  const handleSelectedIndexChange2 = () => {
    setselectedSubIndex2((prev) => prev + 1);
  };
  const handleSelectedIndexChange3 = () => {
    setselectedSubIndex3((prev) => prev + 1);
  };

  return (
    <Container style={{ backgroundColor: "black" }}>
      <Stack gap={2} className="col-md-5 mx-auto">
        <Product
          len={5}
          pageData={PageData1}
          selectedSubIndex={selectedSubIndex1}
          handleReduceSelectedIndexChange={handleReduceSelectedIndexChange1}
          handleSelectedIndexChange={handleSelectedIndexChange1}
        />
        <Product
          len={2}
          pageData={PageData2}
          selectedSubIndex={selectedSubIndex2}
          handleSelectedIndexChange={handleSelectedIndexChange2}
          handleReduceSelectedIndexChange={handleReduceSelectedIndexChange2}
        />
        <Product
          len={2}
          pageData={PageData3}
          selectedSubIndex={selectedSubIndex3}
          handleSelectedIndexChange={handleSelectedIndexChange3}
          handleReduceSelectedIndexChange={handleReduceSelectedIndexChange3}
        />
      </Stack>
    </Container>
  );
};

export default Products;
