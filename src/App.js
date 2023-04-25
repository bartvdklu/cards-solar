import React from 'react';
import { HomeScreen } from './screens/index';
import { GlobalStyle } from './styles/styles';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Stats from './screens/Stats';
import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/signin' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
