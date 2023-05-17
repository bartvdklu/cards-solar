import React from 'react';
import { HomeScreen } from './screens/index';
import { GlobalStyle } from './styles/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import Stats from './screens/Stats';
import Login from './screens/auth/Login';
import CardDashboard from './screens/admin/CardDashboard';
import AddCard from './screens/admin/AddCard';
import EditCard from './screens/admin/EditCard';

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
firebase.auth();

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/admin">
          <Route index element={<CardDashboard />} />
          <Route path="add-card" element={<AddCard />} />
          <Route path="edit-card/:id" element={<EditCard />} />
        </Route>
        <Route path="/stats" element={<Stats />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
