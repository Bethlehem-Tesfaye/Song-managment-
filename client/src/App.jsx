import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListSongPage from "./pages/listPage/ListSongsPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import ForgotPasswordPage from "./pages/forgotPassword/ForgotPassword.jsx";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/songs" element={<ListSongPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
