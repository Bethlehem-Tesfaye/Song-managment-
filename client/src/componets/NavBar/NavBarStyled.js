import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.listBackground};
  border-radius: 8px;
  margin-bottom: 20px;
`;
export const Logo = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme.colors.value};
`;
export const Field = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-wrap: wrap;
`;
export const AddButton = styled.button`
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
