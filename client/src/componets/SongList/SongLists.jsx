import React, { useEffect } from "react";
import Pagination from "../Pagination/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSongRequest,
  fetchSongsRequest
} from "../../redux/feature/songsSLice.js";
import SongForm from "../SongForm/SongForm.jsx";
import { openModal } from "../../redux/feature/modalSlice.js";
import {
  Container,
  SongRow,
  Label,
  Value,
  Field,
  SongBlock,
  EditButton,
  DeleteButton,
  Modal
} from "./songListStyled.js";

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
