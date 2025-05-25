import React from "react";
import { Container } from "react-bootstrap";
import CardMain from "./CardMain";
import SolutionsComp from "./SolutionsComp";

const Home = () => {
  return (
    <Container>
      <CardMain />
      <SolutionsComp />
    </Container>
  );
};

export default Home;
