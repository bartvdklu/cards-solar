import styled, { createGlobalStyle } from "styled-components";

// global style
export const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'circularBold';
     src: url('/fonts/Circular_Std_Bold.ttf');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'circularBold', sans-serif;
    color: #1a1b1f;
  }
`;

// Titles
export const H1 = styled.h1`
  font-size: 75px;
  margin-bottom: 0;
  color: #292929;
`;
export const H2 = styled.h2`
  font-size: 35px;
  margin: 0;
  color: #656565;
`;

// Container
export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
`;
