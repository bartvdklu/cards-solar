import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Container } from '../styles/styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

import scrollLock from 'scroll-lock';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const HomeScreen = () => {
  scrollLock.disablePageScroll();
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
            if (!cards.includes(doc.data())) {
              setCards((cards) => [...cards, doc.data()]);
            }
          });
        });
    }
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
          />
        ))}
      </CardContainer>
      <StyledSignagute>
        <StyledBtn onClick={refreshPage}>Shuffle the deck!</StyledBtn>
      </StyledSignagute>
      {showConfetti && <ConfettiExplosion zIndex={99999} duration={1000} />}
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

// const StyledConfetti = styled(Confetti)`
//   position: fixed !important;
//   right: 0;
//   top: 50%;
// `;

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
