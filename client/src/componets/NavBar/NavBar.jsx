import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/feature/modalSlice";
import { setTolight, setToDark } from "../../redux/feature/themeSlice";
import {
  Container,
  Logo,
  Field,
  AddButton,
  SunIcon,
  MoonIcon
} from "./NavBarStyled.js";
import { Link } from "react-router-dom";
import { logoutRequest } from "../../redux/feature/authSLice";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDark } = useSelector((state) => state.theme);
  const { user, isLoggedOut } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/login");
    }
  }, [isLoggedOut, navigate]);

  return (
    <Container>
      <Logo>Song App</Logo>
      <Field>
        {isDark ? (
          <SunIcon onClick={() => dispatch(setTolight())} />
        ) : (
          <MoonIcon onClick={() => dispatch(setToDark())} />
        )}
        <AddButton onClick={() => dispatch(openModal({ isEdit: false }))}>
          Add
        </AddButton>

        <Link to="/stats">
          <AddButton>Stats</AddButton>
        </Link>

        {user ? (
          <AddButton onClick={handleLogout}>Logout</AddButton>
        ) : (
          <Link to="/login">
            <AddButton>Login</AddButton>
          </Link>
        )}
      </Field>
    </Container>
  );
}

export default NavBar;
