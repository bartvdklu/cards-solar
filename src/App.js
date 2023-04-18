import React from 'react';
import { HomeScreen } from './screens/index';
import { GlobalStyle } from './styles/styles';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAE0qfrE7u0PqmLaOoZu9la5ZMViCAOb5A',
  authDomain: 'challengedbysolar.firebaseapp.com',
  projectId: 'challengedbysolar',
  storageBucket: 'challengedbysolar.appspot.com',
  messagingSenderId: '594718924050',
  appId: '1:594718924050:web:863dfbc0cffd20b3d8a7cb',
  measurementId: 'G-NQHYFD4WJP',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
    </>
  );
}

export default App;
