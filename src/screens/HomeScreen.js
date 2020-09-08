import React from "react";
import { Card } from "../components/Card";
import { H1, H2, Container } from "../styles/styles";

const HomeScreen = () => {
  return (
    <Container>
      <H1>Personal Manifesto</H1>
      <H2>Mike Hendriks</H2>
      <Card />
    </Container>
  );
};

export default HomeScreen;
