import React from "react";
import { openModal } from "../../redux/feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTolight, setToDark } from "../../redux/feature/themeSlice";
import {
  Container,
  Logo,
  Field,
  AddButton,
  SunIcon,
  MoonIcon
} from "./NavBarStyled.js";

function NavBar() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);

  return (
    <div>
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
        </Field>
      </Container>
    </div>
  );
}

export default NavBar;
