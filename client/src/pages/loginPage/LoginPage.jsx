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
} from "./LoginPageStyled.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUserRequest,
  registerUserRequest
} from "../../redux/feature/authSLice.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(registerUserRequest(formData));
    } else {
      dispatch(loginUserRequest(formData));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/songs");
    }
  }, [user, navigate]);

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    setFormData((prev) => ({ ...prev, name: "" }));
  };

  return (
    <Wrapper>
      <Card>
        <Title>{isSignup ? "Sign Up" : "Login"}</Title>
        <Form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={isSignup}
              />
            </>
          )}

          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && (
            <p style={{ color: "red", marginTop: "10px", fontSize: "0.9rem" }}>
              Login Failed, try again
            </p>
          )}
          <Button type="submit" disabled={isLoading}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
        </Form>

        {!isSignup && (
          <FooterText>
            Forgot your password?
            <Link to="/forgot-password">
              <LinkText
                onClick={() => console.log("Redirect to forgot password")}
              >
                Reset it here
              </LinkText>
            </Link>
          </FooterText>
        )}

        <FooterText>
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <LinkText onClick={toggleMode}>
            {isSignup ? "Login" : "Sign up"}
          </LinkText>
        </FooterText>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;
