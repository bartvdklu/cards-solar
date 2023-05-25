import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Card2 from '../../components/Card/Card2';

const AddCard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [card, setCard] = useState({
    title: '[Titel]',
    subtitle: '[Opdracht omschrijving]',
    backgroundColor: '#b3b3b3',
    textColor: '#d5d5d5',
  });
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

  const handleChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('cards')
      .add({
        title: card.title,
        subtitle: card.subtitle,
        backgroundColor: card.backgroundColor,
        textColor: card.textColor,
        countFinished: 1,
        countSkipped: 1
      })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        firebase
          .firestore()
          .collection('cards')
          .doc(docRef.id)
          .update({
            id: docRef.id
          })
        navigate('/admin');
      })
    }

  return (
    <>
    {loggedIn ? (<BGContainer>
      <StyledH1>Kaart toevoegen</StyledH1>
      <StyledP>Voeg hier een nieuwe kaart toe aan de app!</StyledP>
      <FormContainer>
          <input type="text" id="title" name="title" placeholder='Opdracht titel' onChange={handleChange} />
          <input type="text" id="subtitle" name="subtitle" placeholder='Opdracht omschrijving' onChange={handleChange} />
          <select name="backgroundColor" id="backgroundColor" onChange={handleChange}>
            <option value="" selected disabled hidden>Kies een kleur voor de kaart</option>
            <option value="#33cc49">Dull Lime</option>
            <option value="#168931">North Texas Green</option>
            <option value="#e9f51e">Laser Lemon</option>
            <option value="#ff9a2f">Neon Carrot</option>
            <option value="#ff4747">Tart Orange</option>
            <option value="#5e5ef0">Dark Blue</option>
            <option value="#8b85ff">Faded Blue</option>
            <option value="#403131">Old Burgandy</option>
            <option value="#ff7add">Pale Magenta</option>
            <option value="#a03bad">Purpureus</option>
          </select>
          <select name="textColor" id="textColor" onChange={handleChange}>
            <option value="" selected disabled hidden>Kies een kleur voor de tekst</option>
            <option value="#33cc49">Dull Lime</option>
            <option value="#168931">North Texas Green</option>
            <option value="#e9f51e">Laser Lemon</option>
            <option value="#ff9a2f">Neon Carrot</option>
            <option value="#ff4747">Tart Orange</option>
            <option value="#5e5ef0">Dark Blue</option>
            <option value="#8b85ff">Faded Blue</option>
            <option value="#403131">Old Burgandy</option>
            <option value="#ff7add">Pale Magenta</option>
            <option value="#a03bad">Purpureus</option>
          </select>
      </FormContainer>
      <CardContainer>
        <Card2 title={card.title} subtitle={card.subtitle} backgroundColor={card.backgroundColor} textColor={card.textColor} />
      </CardContainer>
      {card.title !== '[Titel]' && card.subtitle !=='[Opdracht omschrijving]' && card.backgroundColor !== '#b3b3b3' && card.textColor !== '#d5d5d5' ? <SubmitBtn onClick={handleSubmit}>Voeg toe!</SubmitBtn> : <SubmitBtnDisabled>Voltooi eerst alle stappen!</SubmitBtnDisabled>}
    </BGContainer>) : (<BGContainer></BGContainer>)}
    </>
  )
}

export default AddCard

const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #403131;
`;

const StyledP = styled.p`
  color: #403131;
`

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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  margin-bottom: 50px;
`;

const SubmitBtn = styled.button`
  align-self: center;
  position: fixed;
  bottom: 20px;
  width: 80%;
  height: 50px;
  background-color: #33cc49;
  border: 4px solid #168931;
  color: #fff;
  box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.30);
`

const SubmitBtnDisabled = styled.button`
  align-self: center;
  position: fixed;
  bottom: 20px;
  width: 80%;
  height: 50px;
  background-color: #d5d5d5;
  border: 4px solid #b3b3b3;
  color: #b3b3b3;
  box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.30);
  pointer-events: none;
`
