import React, { useEffect, useState} from 'react';
import { Card } from '../components/Card';
import { Container } from '../styles/styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ConfettiExplosion from 'react-confetti-explosion';

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import scrollLock from 'scroll-lock';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { ToastContainer } from 'react-toastify';

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const HomeScreen = () => {
  scrollLock.disablePageScroll();
  const [showConfetti, setShowConfetti] = useState(false);
  const [cards, setCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  function startGame() {
    const cardsRef = document.getElementById('cardcontainer');
    const startRef = document.getElementById('startcontainer');
    cardsRef.style.opacity = 1;
    startRef.style.zIndex = -1;
    startRef.style.opacity = 0;


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
      <ToastContainer />
      <StartContainer id="startcontainer">
        <h1>HALLO TIJGER!</h1>
        <p>Dit is het spel om te spelen tijdens Solar Weekend 2023!</p>
        <p>Van spannende challenges tot grappige opdrachten tot je vrienden voorshut zetten. Begin snel en have fun!</p>
        <p>PS. Klappen = Drinken!</p>
        <StyledFloatingBtn onClick={startGame}>GAS EROP!</StyledFloatingBtn>
      </StartContainer>
      <CardContainer id="cardcontainer">
        {shuffledCards.map((item, i) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            key={i}
            backgroundColor={item.backgroundColor}
            textColor={item.textColor}
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
  opacity: 0;
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

const StartContainer = styled.div`
  position: fixed;
  width: 85vw;
  background-color: #ff7add;
  border: 2px solid #a03bad;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const StyledFloatingBtn = styled.button`
  background-color: #5e5ef0;
  border: 1px solid #000;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
`;

// const ControlsContainer = styled.div`
//   position: fixed;
//   bottom: 10%;
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   z-index: 999;
// `;

// const ActionBtn = styled.button`
//   background: none;
//   border: none;
//   font-size: 1em;
//   color: #403131;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
