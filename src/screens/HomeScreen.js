import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Container } from '../styles/styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Confetti from 'react-dom-confetti';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 100,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '5px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const HomeScreen = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [cards, setCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    if (cards.length === 0) {
      firebase
        .firestore()
        .collection('cards')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCards((cards) => [...cards, doc.data()]);
          });
        });
    }
    console.log(cards);
  }, [cards]);

  useEffect(() => {
    setShuffledCards(shuffle(cards));
  }, [cards]);

  return (
    <Container>
      <CardContainer>
        {shuffledCards.map((item, i) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            key={i}
            backgroundColor={item.backgroundColor}
            textColor="#fff"
            setShowConfetti={setShowConfetti}
            rotate={Math.floor(Math.random() * 21) - 10}
          />
        ))}
      </CardContainer>
      <StyledSignagute>
        <StyledBtn onClick={refreshPage}>Shuffle the deck!</StyledBtn>
      </StyledSignagute>
      <StyledConfetti active={showConfetti} config={confettiConfig} />
    </Container>
  );
};

export default HomeScreen;

const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;
`;

const StyledConfetti = styled(Confetti)`
  position: fixed !important;
  right: 0;
  top: 50%;
`;

const StyledSignagute = styled.div`
  position: fixed !important;
  z-index: 0;
  font-size: 1.5em;
`;

const StyledBtn = styled.button`
  background-color: #5e5ef0;
  border: 1px solid #000;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
`;
