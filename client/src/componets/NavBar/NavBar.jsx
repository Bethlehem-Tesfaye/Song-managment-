import React from "react";
import { Sun, Moon } from "lucide-react";
import { openModal } from "../../redux/feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTolight, setToDark } from "../../redux/feature/themeSlice";
import { Container, Logo, Field, AddButton } from "./NavBarStyled.js";

function NavBar() {
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);

  return (
    <div>
      <Container>
        <Logo>Song App</Logo>
        <Field>
          {isDark ? (
            <Sun onClick={() => dispatch(setTolight())} />
          ) : (
            <Moon onClick={() => dispatch(setToDark())} />
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
