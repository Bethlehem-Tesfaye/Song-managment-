import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const SongRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.listBackground};
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const Label = styled.span`
  font-weight: 500;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.label};
`;

export const Value = styled.span`
  color: ${(props) => props.theme.colors.value};
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-width: 150px;
  gap: 10px;
`;

export const SongBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  flex: 1 1 200px;
`;

export const EditButton = styled.button`
  padding: 7px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) => props.theme.colors.editBtn};
  &:hover {
    background-color: rgb(168, 89, 11);
  }
`;

export const DeleteButton = styled.button`
  padding: 7px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) => props.theme.colors.deleteBtn};
  &:hover {
    background-color: rgb(177, 64, 113);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5); /* dim background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
