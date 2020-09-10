import React from "react";
import styled from "styled-components";
// import { GlobalStyle } from "../../styles/styles";
import { Number } from "./index";
import { motion } from "framer-motion";

const cardMotion = {
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transtition: { type: "spring", damping: 300, velocity: 0.1 },
  },
};

const Card = ({ title, subtitle, number, backgroundColor, textColor }) => {
  return (
    <CardWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      variants={cardMotion}
      // initial="hidden"
      // animate="show"
      transition={{ duration: 0.5 }}
    >
      <Number number={number} />
      <HeaderWrapper>
        <H3>{title}</H3>
      </HeaderWrapper>
      <p>{subtitle}</p>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(motion.div)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 23px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 30px 60px 30px;
  flex-basis: 25%;
  margin: 8px;
`;

const HeaderWrapper = styled.div`
  height: 275px;
  display: flex;
  align-items: flex-end;
`;
const H3 = styled.h3`
  font-family: "circularBlack", sans-serif;
  font-size: 44px;
  margin: 0;
`;
