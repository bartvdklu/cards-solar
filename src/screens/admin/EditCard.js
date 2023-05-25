import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const EditCard = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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
  });

  return (
    <>
    {loggedIn ? (<BGContainer>
      <StyledH1>{id}</StyledH1>
      
    </BGContainer>) : (<BGContainer></BGContainer>)}
    </>
  )
}

export default EditCard

const StyledH1 = styled.h1`
  font-size: 2em;
  font-weight: 700;
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
