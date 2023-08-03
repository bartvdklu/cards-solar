import React from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

const Card = ({
  id,
  title,
  subtitle,
  backgroundColor,
  textColor
}) => {

  return (
    <CardWrapper
      preventSwipe={['up', 'down']}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <HeaderWrapper>
        <H3>{title}</H3>
      </HeaderWrapper>
      <P>{subtitle}</P>
      <FooterWrapper>
        <Psmall>Swipe left to skip</Psmall>
        <Psmall>Swipe right if finished</Psmall>
      </FooterWrapper>
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
  width: 75%;
  height: 60%;
  position: absolute;
  transform: rotate(${Math.floor(Math.random() * 21) - 10}deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;
  align-self: center;
`;

const H3 = styled.h3`
  font-family: 'circularBlack', sans-serif;
  font-size: 2em;
  margin: 0;
  text-transform: uppercase;
  text-align: left;
`;

const P = styled.p`
  font-size: 1.1em;
  margin: 0;
  overflow-wrap: anywhere;
`;

const Psmall = styled.p`
  font-size: 0.8em;
  margin: 0;
`;
