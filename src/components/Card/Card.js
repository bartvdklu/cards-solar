import React from 'react';
import styled from 'styled-components';
// import { Number } from './index';
import TinderCard from 'react-tinder-card';

const Card = ({
  id,
  title,
  subtitle,
  backgroundColor,
  textColor,
  setShowConfetti,
}) => {
  const onSwipe = (direction) => {
    direction === 'right' && setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 100);

    //*IMPORTANT: This is where you can add the logic to update the countSkipped or countFinished in the database, WORKING but commented out for now

    // direction === 'left' &&
    //   firebase
    //     .firestore()
    //     .collection('cards')
    //     .doc(id)
    //     .update({ countSkipped: firebase.firestore.FieldValue.increment(1) });
    // direction === 'right' &&
    //   firebase
    //     .firestore()
    //     .collection('cards')
    //     .doc(id)
    //     .update({ countFinished: firebase.firestore.FieldValue.increment(1) });
  };

  return (
    <CardWrapper
      onSwipe={onSwipe}
      preventSwipe={['up', 'down']}
      backgroundColor={backgroundColor}
      textColor={textColor}
      rotate={Math.floor(Math.random() * 21) - 10}
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
  width: 55%;
  height: 45%;
  position: absolute;
  transform: rotate(${(props) => props.rotate}deg);
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
`;

const Psmall = styled.p`
  font-size: 0.8em;
  margin: 0;
`;
