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
import { forgotPasswordRequest } from "../../redux/feature/authSLice.js";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordRequest({ email }));
    setSubmitted(true);
  };

  useEffect(() => {
    if (error) {
      setSubmitted(false); // allow retry if it fails
    }
  }, [error]);

  return (
    <Wrapper>
      <Card>
        <Title>Forgot Password</Title>

        {submitted && !error ? (
          <FooterText>
            If an account with <strong>{email}</strong> exists, a reset link has
            been sent.
          </FooterText>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {error && <FooterText style={{ color: "red" }}>{error}</FooterText>}

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Continue"}
            </Button>
          </Form>
        )}

        <FooterText>
          <LinkText onClick={() => window.history.back()}>
            ← Back to Login
          </LinkText>
        </FooterText>
      </Card>
    </Wrapper>
  );
};

export default ForgotPasswordPage;
