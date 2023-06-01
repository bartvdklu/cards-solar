import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const Stats = () => {
  const [stats, setStats] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }

  function logOutFirebase() {
    firebase.auth().signOut().then(() => {
      console.log('signed out');
    })
  }

  useEffect(() => {
    if (stats.length === 0) {
      firebase
        .firestore()
        .collection('cards')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setStats((cards) => [...cards, doc.data()]);
          });
        });
    }

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

    console.log(loggedIn)
  },[]);

  return (
    <>
    {loggedIn ? (
    <CleanContainer>
      <StyledH1>STATESTIEKEN</StyledH1>
      <ProgressContainer>
        {stats.map((item, i) => (
          <BarContainer key={i}>
            <StyledP>
              <ItemTitle>{item.title}</ItemTitle>: {item.subtitle}
            </StyledP>
            <ProgressBar style={{ width: '100%' }}>
              <ProgressBar
                now={
                  (item.countFinished * 100) /
                  (item.countFinished + item.countSkipped)
                }
                key={1}
                style={{ backgroundColor: '#a03bad' }}
                label={`Finished: ${item.countFinished}`}
              />
              <ProgressBar
                now={
                  (item.countSkipped * 100) /
                  (item.countFinished + item.countSkipped)
                }
                key={2}
                style={{ backgroundColor: '#ff7add' }}
                label={`Skipped: ${item.countSkipped}`}
              />
            </ProgressBar>
          </BarContainer>
        ))}
      </ProgressContainer>
      <BtnContainer>
        <StyledFloatingBtn onClick={refreshPage}>Refresh</StyledFloatingBtn>
        <StyledFloatingBtn onClick={logOutFirebase}>Loguit</StyledFloatingBtn>
      </BtnContainer>
    </CleanContainer>
    ) : <CleanContainer></CleanContainer>}
    </>
  );
};

export default Stats;

const StyledH1 = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #fff;
`;

const StyledP = styled.p`
  font-size: 0.6em;
  color: #fff;
  margin: 0;
  margin-bottom: 10px;
`;

const ItemTitle = styled.span`
  color: #fff;
  text-transform: uppercase;
`;

const CleanContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #403131;
  padding: 20px;
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin-bottom: 50px;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StyledFloatingBtn = styled.button`
  background-color: #5e5ef0;
  border: 1px solid #000;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 20px;
  width: calc(100vw - 40px);
`
