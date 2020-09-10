import React from "react";
import { Card } from "../components/Card";
import { H1, H2, Container } from "../styles/styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ScrollIndicator } from "../components";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HomeScreen = () => {
  return (
    <Container>
      <H1>Personal Manifesto</H1>
      <H2>Mike Hendriks</H2>
      <ScrollIndicator />

      <CardContainer variants={container} animate="show" initial="hidden">
        <Card
          title={`See opportunity not failure`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={1}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Learn from your mistakes`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={2}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Failure is not a waste of time`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={3}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Be kind`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={4}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Create`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={5}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Fuck yesterday`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={6}
          backgroundColor="#000"
          textColor="#fff"
        />
        <Card
          title={`Balance your work and personal life`}
          subtitle={`lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet `}
          number={7}
          backgroundColor="#000"
          textColor="#fff"
        />
      </CardContainer>
    </Container>
  );
};

export default HomeScreen;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
