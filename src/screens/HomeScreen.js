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
      "We forget that behind every story of success there are hundreds of instances of failure, falling and bouncing back",
    backgroundColor: "#FA8184",
    textColor: "#FFF8D6",
  },
  {
    title: "Failure is not a waste of time",
    subtitle:
      "No-one wants to hear about how I couldn’t accomplish something. But fuck that, it's the only way to accomplish new things",
    backgroundColor: "#038F97",
    textColor: "#FFF8D6",
  },
  {
    title: "Learn from your mistakes",
    subtitle:
      "Learn from your mistakes and cary on with a newly gained set of knowledge",
    backgroundColor: "#C9E4DC",
    textColor: "#F53763",
  },
  {
    title: "Try something new",
    subtitle:
      "Your comfort zone is a dangerous place. It prevents you from improving, it stops you from achieving all the things you are capable of achieving and it makes you miserable",
    backgroundColor: "#F9F7E6",
    textColor: "#35C1AC",
  },
  {
    title: "Fuck other’s opinions",
    subtitle:
      "You’ll worry less about what people think about you when you realize how seldom they do",
    backgroundColor: "#D8667F",
    textColor: "#F9DF8A",
  },
  {
    title: "If you do something, do it right",
    subtitle:
      "Don't keep redoing old unfinished things. Make it right the first time and move to the next",
    backgroundColor: "#FFB694",
    textColor: "#FFF8D6",
  },
  {
    title: "Balance your work and personal life",
    subtitle:
      "I need to work on balancing my work and personal life for my own mental clarity",
    backgroundColor: "#FA8184",
    textColor: "#FFF8D6",
  },
  {
    title: "Be kind",
    subtitle:
      "You only get one shot at a first impression. Make it a good one.",
    backgroundColor: "#038F97",
    textColor: "#FFF8D6",
  },
  {
    title: "Worry less",
    subtitle:
      "Worrying doesn’t make us compassionate. It doesn’t make us thoughtful, and worrying has never been a good problem solving tactic",
    backgroundColor: "#C9E4DC",
    textColor: "#F53763",
  },
  {
    title: "You never know until you ask",
    subtitle:
      "Derived from my life motto in dutch 'Een nee heb je, een ja kan je krijgen'",
    backgroundColor: "#F9F7E6",
    textColor: "#35C1AC",
  },
  {
    title: "Less is more",
    subtitle: "",
    backgroundColor: "#FFB694",
    textColor: "#FFF8D6",
  },
  {
    title: "Fuck yesterday",
    subtitle:
      "Fuck Yesterday... don’t dwell on it .. understand it, learn from it but don’t over respect it and allow it to affect tomorrow negatively ",
    backgroundColor: "#D8667F",
    textColor: "#F9DF8A",
  },
];
