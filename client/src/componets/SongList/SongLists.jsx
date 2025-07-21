import React from "react";
import styled from "@emotion/styled";
import Pagination from "../Pagination/Pagination.jsx";

const Container = styled.div`
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

const SongRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.listBackground};
  border-radius: 8px;
  margin-bottom: 15px;
`;

const Label = styled.span`
  font-weight: 500;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.label};
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.value};
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-width: 150px;
  gap: 10px;
`;

const SongBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  flex: 1 1 200px;
`;

const EditButton = styled.button`
  padding: 7px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) => props.theme.colors.editBtn};
  &:hover {
    opacity: 0.9;
  }
`;

const DeleteButton = styled.button`
  padding: 7px 13px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #000;
  background-color: ${(props) => props.theme.colors.deleteBtn};
  &:hover {
    opacity: 0.9;
  }
`;

export default function SongLists() {
  return (
    <>
      <Container>
        <SongRow>
          <SongBlock>
            <Field>
              <Label>Title:</Label>
              <Value>title</Value>
            </Field>
            <Field>
              <Label>Artist:</Label>
              <Value> artist</Value>
            </Field>
          </SongBlock>

          <SongBlock>
            <Field>
              <Label>Album:</Label>
              <Value> album</Value>
            </Field>
            <Field>
              <Label>Year:</Label>
              <Value>year</Value>
            </Field>
          </SongBlock>

          <SongBlock>
            <Field>
              <Label>Genre:</Label>
              <Value>genre</Value>
            </Field>
          </SongBlock>

          <SongBlock>
            <Field>
              <EditButton>edit</EditButton>
              <DeleteButton>delete</DeleteButton>
            </Field>
          </SongBlock>
        </SongRow>
      </Container>
      <Pagination />
    </>
  );
}
