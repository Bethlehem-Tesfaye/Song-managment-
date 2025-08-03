// src/pages/LandingPageStyled.js
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.listBackground};
  padding: 20px;
`;

export const AnimatedBox = styled.div`
  background-color: ${(props) => props.theme.colors.background || "#fff"};
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeSlideIn} 0.7s ease forwards;
`;

export const WelcomeText = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.value};
`;

export const LoginButton = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.colors.addBtn};
  color: #000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: rgb(27, 131, 18);
    transform: scale(1.05);
  }
`;
