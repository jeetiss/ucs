import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 16px 0;

  align-items: center;
`;

const Button = styled.button`
  outline: none;
  border: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 16px;
  padding: 0;

  font-size: 16px;
  color: white;
  background-color: hsl(0, 0%, 33%);

  &:hover {
    background-color: hsl(0, 0%, 40%);
  }

  transition-timing-function: cubic-bezier(0.05, 0.58, 0.44, 1.53);
  transition-duration: 0.35s;
  transition-property: transform;
  transform: scale(1);

  &:active {
    background-color: hsl(0, 0%, 45%);
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.09, 0.58, 0.42, 0.96);
    transform: scale(0.925);
  }

  &:focus {
    box-shadow: 0 0 0 5px hsla(0, 0%, 10%, 0.4);
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Value = styled.span`
  font-size: 16px;
  min-width: 32px;
  text-align: center;
`;

const Counter = ({ value, setter }) => (
  <Container>
    <Button onClick={() => setter(value - 1)}>-</Button>
    <Value>{value}</Value>
    <Button onClick={() => setter(value + 1)}>+</Button>
  </Container>
);

export default Counter;
