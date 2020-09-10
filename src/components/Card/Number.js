import React from "react";
import styled from "styled-components";

const Number = ({ number }) => {
  return <NumberContainer>{number} </NumberContainer>;
};

export default Number;

const NumberContainer = styled.div`
  border-radius: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
`;
