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
        {data.map((item, i) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            number={i + 1}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
          />
        ))}
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

const data = [
  {
    title: "See opportunity not failure",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#FA8184",
    textColor: "#FFF8D6",
  },
  {
    title: "Failure is not a waste of time",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#038F97",
    textColor: "#FFF8D6",
  },
  {
    title: "Learn from your mistakes",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#C9E4DC",
    textColor: "#F53763",
  },
  {
    title: "Try something new",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#F9F7E6",
    textColor: "#35C1AC",
  },
  {
    title: "Fuck other’s opinions",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#D8667F",
    textColor: "#F9DF8A",
  },
  {
    title: "If you do something, do it right",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#FFB694",
    textColor: "#FFF8D6",
  },
  {
    title: "Balance your work and personal life",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#FA8184",
    textColor: "#FFF8D6",
  },
  {
    title: "Be kind",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#038F97",
    textColor: "#FFF8D6",
  },
  {
    title: "Worry less",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#C9E4DC",
    textColor: "#F53763",
  },
  {
    title: "You never know until you ask",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#F9F7E6",
    textColor: "#35C1AC",
  },
  {
    title: "Less is more",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#FFB694",
    textColor: "#FFF8D6",
  },
  {
    title: "Fuck yesterday",
    subtitle:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    backgroundColor: "#D8667F",
    textColor: "#F9DF8A",
  },
];
