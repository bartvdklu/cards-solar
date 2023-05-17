import React, { useEffect } from 'react';
import { Container } from '../../styles/styles';
// import styled from 'styled-components';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
// import 'firebase/compat/firestore';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/admin',
  // We will display Google and Facebook as auth providers.
  signInOptions: [{
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    disableSignUp: true,
  }
  ]
}

const Login = () => {

  useEffect(() => {
  
  });


  return (
    <Container>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  );
};

export default Login;

// const StyledH1 = styled.h1`
//   font-size: 2em;
//   text-align: center;
//   color: #fff;
// `;

// const StyledP = styled.p`
//   font-size: 0.6em;
//   color: #fff;
//   margin: 0;
//   margin-bottom: 10px;
// `;

// const ItemTitle = styled.span`
//   color: #fff;
//   text-transform: uppercase;
// `;

// const CleanContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
//   min-height: 100vh;
//   background-color: #403131;
//   padding: 20px;
// `;

// const ProgressContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 20px;
//   width: 90%;
//   margin-bottom: 50px;
// `;

// const BarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   width: 100%;
// `;

// const StyledFloatingBtn = styled.button`
//   background-color: #5e5ef0;
//   border: 1px solid #000;
//   color: #fff;
//   padding: 10px 20px;
//   text-transform: uppercase;
//   position: fixed;
//   bottom: 20px;
// `;
