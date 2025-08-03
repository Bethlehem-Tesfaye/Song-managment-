// src/pages/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LandingWrapper,
  WelcomeText,
  LoginButton,
  AnimatedBox
} from "./LandingPageStyled";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <LandingWrapper>
      <AnimatedBox>
        <WelcomeText>🎶 Welcome to the Song Management App 🎶</WelcomeText>
        <LoginButton onClick={handleLoginClick}>Login to Continue</LoginButton>
      </AnimatedBox>
    </LandingWrapper>
  );
}
