import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Pagination from "../Pagination/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSongRequest,
  fetchSongsRequest
} from "../../redux/feature/songsSLice.js";
import SongForm from "../SongForm/SongForm.jsx";
import { openModal } from "../../redux/feature/modalSlice.js";

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

const Modal = styled.div`
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

export default function SongLists() {
  const dispatch = useDispatch();
  const { songs, isLoading } = useSelector((state) => state.songs);
  const { isModalOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(fetchSongsRequest(1));
  }, [dispatch]);

  const handleEdit = (song) => {
    dispatch(openModal({ isEdit: true, song }));
  };

  const handleDelete = (id) => {
    dispatch(deleteSongRequest(id));
    window.alert("song deleted!");
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {isModalOpen && (
        <Modal>
          <SongForm />
        </Modal>
      )}
      <Container>
        {!songs
          ? "No Song "
          : songs.map((song, index) => (
              <div key={song._id}>
                <SongRow>
                  <SongBlock>
                    <Field>
                      <Label>Title:</Label>
                      <Value>{song.title}</Value>
                    </Field>
                    <Field>
                      <Label>Artist:</Label>
                      <Value>{song.artist}</Value>
                    </Field>
                  </SongBlock>

                  <SongBlock>
                    <Field>
                      <Label>Album:</Label>
                      <Value>{song.album}</Value>
                    </Field>
                    <Field>
                      <Label>Year:</Label>
                      <Value>{song.year}</Value>
                    </Field>
                  </SongBlock>

                  <SongBlock>
                    <Field>
                      <Label>Genre:</Label>
                      <Value>{song.genre || "N/A"}</Value>
                    </Field>
                  </SongBlock>

                  <SongBlock>
                    <Field>
                      <EditButton
                        onClick={() => {
                          handleEdit(song);
                        }}
                      >
                        edit
                      </EditButton>
                      <DeleteButton
                        onClick={() => {
                          handleDelete(song._id);
                        }}
                      >
                        delete
                      </DeleteButton>
                    </Field>
                  </SongBlock>
                </SongRow>
              </div>
            ))}
        <Pagination />
      </Container>
    </>
  );
}
