import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Card,
  Title,
  Form,
  Label,
  Input,
  Button,
  FooterText,
  LinkText
} from "../loginPage/LoginPageStyled.js";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordRequest } from "../../redux/feature/authSLice.js";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const token = query.get("token");
  const userId = query.get("userId");

  const { isLoading, error, isPasswordResetSuccess } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setLocalError("Passwords do not match.");
    }

    dispatch(
      resetPasswordRequest({
        token,
        userId,
        newPassword: password
      })
    );
  };

  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
    }
  }, [token, userId, navigate]);

  useEffect(() => {
    if (isPasswordResetSuccess) {
      navigate("/login");
    }
  }, [isPasswordResetSuccess, navigate]);

  return (
    <Wrapper>
      <Card>
        <Title>Reset Password</Title>
        <Form onSubmit={handleSubmit}>
          <Label>New Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <Label>Confirm Password</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
          />

          {(localError || error) && (
            <FooterText style={{ color: "red", marginBottom: "1rem" }}>
              {localError || error}
            </FooterText>
          )}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </Form>

        <FooterText>
          <LinkText href="/login">← Back to Login</LinkText>
        </FooterText>
      </Card>
    </Wrapper>
  );
};

export default ResetPasswordPage;
