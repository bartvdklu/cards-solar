import React from 'react';
import { Container } from '../styles/styles';
import styled from 'styled-components';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

const Stats = () => {
  return (
    <Container>
      <StyledH1>STATESTIEKEN</StyledH1>
    </Container>
  );
};

export default Stats;

const StyledH1 = styled.h1`
  font-size: 2em;
  text-align: center;
`;

// const StyledSignagute = styled.div`
//   position: fixed !important;
//   z-index: 0;
//   font-size: 1.5em;
// `;

// const StyledBtn = styled.button`
//   background-color: #5e5ef0;
//   border: 1px solid #000;
//   color: #fff;
//   padding: 10px 20px;
//   text-transform: uppercase;
// `;
