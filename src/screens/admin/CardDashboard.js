import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import { FiPlus } from "react-icons/fi";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import CardItemBlock from '../../components/CardItemBlock';

function CardDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setLoggedIn(true);
      } else {
        // No user is signed in.
        setLoggedIn(false);
        navigate('/login');
      }
    })
  });

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
    console.log(cards)
  }, [cards]);

  return (
    <>
    {loggedIn ? (<BGContainer>
      <StyledH1>Card Dashboard</StyledH1>
      <StyledP>Bekijk hier alle kaarten die in de app staan en voeg eventuele kaarten toe of verwijder kaarten!</StyledP>
      <CardItemsContainer>
        {cards.map((item) => (
          <CardItemBlock title={item.subtitle} id={item.id} key={item.id} />
        ))}
      </CardItemsContainer>
      <FloatingBtn onClick={() => navigate('/admin/add-card')}><FiPlus/></FloatingBtn>
    </BGContainer>) : (<BGContainer></BGContainer>)}
    </>
  )
}

export default CardDashboard;

const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #403131;
`;

const StyledP = styled.p`
  color: #403131;
`;

const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: #ffc688;
  padding: 20px;
`;

const CardItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

const FloatingBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #403131;
  color: #fff;
  font-size: 2em;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
