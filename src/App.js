import React from 'react';
import { HomeScreen } from './screens/index';
import { GlobalStyle } from './styles/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

import Stats from './screens/Stats';
import Login from './screens/auth/Login';
import CardDashboard from './screens/admin/CardDashboard';
import AddCard from './screens/admin/AddCard';
import EditCard from './screens/admin/EditCard';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.firestore();
// firebase.auth();

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
