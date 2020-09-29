import React from "react";
import styled from "styled-components";
import { Number } from "./index";
import TinderCard from "react-tinder-card";

const Card = ({
  title,
  subtitle,
  number,
  backgroundColor,
  textColor,
  setShowConfetti,
  rotate,
}) => {
  const onSwipe = (direction) => {
    direction === "right" && setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 100);
  };

  return (
    <CardWrapper
      onSwipe={onSwipe}
      preventSwipe={["up", "down"]}
      backgroundColor={backgroundColor}
      textColor={textColor}
      rotate={rotate}
    >
      <Number number={number} borderColor={textColor} />
      <HeaderWrapper>
        <H3>{title}</H3>
      </HeaderWrapper>
      <p>{subtitle}</p>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(TinderCard)`
  will-change: transform;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 23px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 30px 30px 60px 30px;
  width: 280px;
  height: 390px;
  position: absolute;
  transform: rotate(${(props) => props.rotate}deg);
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
