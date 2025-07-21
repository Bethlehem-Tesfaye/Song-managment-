import React from "react";
import styled from "@emotion/styled";
import { Sun, Moon } from "lucide-react";
import { openModal } from "../../redux/feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTolight, setToDark } from "../../redux/feature/themeSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.listBackground};
  border-radius: 8px;
  margin-bottom: 20px;
`;
const Logo = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme.colors.value};
`;
const Field = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-wrap: wrap;
`;
const AddButton = styled.button`
  padding: 7px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) => props.theme.colors.addBtn};
  &:hover {
    opacity: 0.9;
  }
`;

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
