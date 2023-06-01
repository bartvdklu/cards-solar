import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Card2 from '../../components/Card/Card2';

const Editcard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [card, setcard] = useState({});
  const navigate = useNavigate();
  const { id } = useParams()

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

    firebase.firestore().collection('cards').doc(id).get().then((doc) => {
      if (doc.exists) {
        setcard(doc.data());
        console.log(doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  }, []);

  const handleChange = (e) => {
    setcard({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('cards')
      .doc(id)
      .update({
        title: card.title,
        subtitle: card.subtitle,
        backgroundColor: card.backgroundColor,
        textColor: card.textColor,
      })
      .then(() => {
        console.log('Document successfully updated!');
        navigate('/admin');
      })
    }

  return (
    <>
    {loggedIn ? (<BGContainer>
      <StyledH1>Kaart toevoegen</StyledH1>
      <StyledP>Voeg hier een nieuwe kaart toe aan de app!</StyledP>
      <FormContainer>
          <input type="text" id="title" name="title" placeholder='Opdracht titel' onChange={handleChange} defaultValue={card.title} />
          <input type="text" id="subtitle" name="subtitle" placeholder='Opdracht omschrijving' onChange={handleChange} defaultValue={card.subtitle} />
          <select name="backgroundColor" id="backgroundColor" onChange={handleChange}>
            <option value="" disabled hidden>Kies een kleur voor de kaart</option>
            <option value="#33cc49" selected={card.backgroundColor === '#33cc49' ? 'selected' : null}>Dull Lime</option>
            <option value="#168931" selected={card.backgroundColor === '#168931' ? 'selected' : null}>North Texas Green</option>
            <option value="#e9f51e" selected={card.backgroundColor === '#e9f51e' ? 'selected' : null}>Laser Lemon</option>
            <option value="#ff9a2f" selected={card.backgroundColor === '#ff9a2f' ? 'selected' : null}>Neon Carrot</option>
            <option value="#ff4747" selected={card.backgroundColor === '#ff4747' ? 'selected' : null}>Tart Orange</option>
            <option value="#5e5ef0" selected={card.backgroundColor === '#5e5ef0' ? 'selected' : null}>Dark Blue</option>
            <option value="#8b85ff" selected={card.backgroundColor === '#8b85ff' ? 'selected' : null}>Faded Blue</option>
            <option value="#403131" selected={card.backgroundColor === '#403131' ? 'selected' : null}>Old Burgandy</option>
            <option value="#ff7add" selected={card.backgroundColor === '#ff7add' ? 'selected' : null}>Pale Magenta</option>
            <option value="#a03bad" selected={card.backgroundColor === '#a03bad' ? 'selected' : null}>Purpureus</option>
          </select>
          <select name="textColor" id="textColor" onChange={handleChange}>
          <option value="" disabled hidden>Kies een kleur voor de kaart</option>
            <option value="#33cc49" selected={card.textColor === '#33cc49' ? 'selected' : null}>Dull Lime</option>
            <option value="#168931" selected={card.textColor === '#168931' ? 'selected' : null}>North Texas Green</option>
            <option value="#e9f51e" selected={card.textColor === '#e9f51e' ? 'selected' : null}>Laser Lemon</option>
            <option value="#ff9a2f" selected={card.textColor === '#ff9a2f' ? 'selected' : null}>Neon Carrot</option>
            <option value="#ff4747" selected={card.textColor === '#ff4747' ? 'selected' : null}>Tart Orange</option>
            <option value="#5e5ef0" selected={card.textColor === '#5e5ef0' ? 'selected' : null}>Dark Blue</option>
            <option value="#8b85ff" selected={card.textColor === '#8b85ff' ? 'selected' : null}>Faded Blue</option>
            <option value="#403131" selected={card.textColor === '#403131' ? 'selected' : null}>Old Burgandy</option>
            <option value="#ff7add" selected={card.textColor === '#ff7add' ? 'selected' : null}>Pale Magenta</option>
            <option value="#a03bad" selected={card.textColor === '#a03bad' ? 'selected' : null}>Purpureus</option>
          </select>
      </FormContainer>
      <CardContainer>
        <Card2 title={card.title} subtitle={card.subtitle} backgroundColor={card.backgroundColor} textColor={card.textColor} />
      </CardContainer>
      <BtnContainer>
        <BackBtn onClick={() => navigate('/admin')}>Terug</BackBtn>
        <SubmitBtn onClick={handleSubmit}>Bewerk kaart!</SubmitBtn>
      </BtnContainer>
    </BGContainer>) : (<BGContainer></BGContainer>)}
    </>
  )
}

export default Editcard

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
  height: 50px;
  background-color: #33cc49;
  border: 4px solid #168931;
  color: #fff;
  width: 45%;
  box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.30);
`

const BackBtn = styled.button`
  height: 50px;
  background-color: #ff7add;
  border: 4px solid #a03bad;
  color: #fff;
  width: 45%;
  box-shadow: 0px 0px 8px 3px rgba(0,0,0,0.30);
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 20px;
  width: calc(100% - 40px);
`
