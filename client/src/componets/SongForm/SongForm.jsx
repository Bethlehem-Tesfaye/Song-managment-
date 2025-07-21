import React, { useState } from "react";
import styled from "@emotion/styled";
import { closeModal } from "../../redux/feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createSongRequest,
  updateSongRequest
} from "../../redux/feature/songsSLice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 25px 25px;
  margin: 5rem auto 0 auto;
  border: 1px solid #d1d5db;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  border-radius: 15px;
  width: 80%;

  @media (min-width: 640px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    width: 30%;
  }
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const Input = styled.input`
  border: 1px solid #d1d5db;
  padding: 12px 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  border: 1px solid #d1d5db;
  background-color: ${(props) => props.theme.colors.addBtn};
  padding: 12px 10px;
  border-radius: 15px;
  cursor: pointer;
`;

const Cancel = styled.p`
  margin-left: 15px;
  color: #ef4444;
  cursor: pointer;
`;

export default function SongForm() {
  const dispatch = useDispatch();
  const { isEdit, selectedSong } = useSelector((state) => state.modal);

  const [formData, setFormData] = useState({
    title: selectedSong?.title || "",
    artist: selectedSong?.artist || "",
    album: selectedSong?.album || "",
    year: selectedSong?.year || "",
    genre: selectedSong?.genre || ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(
        updateSongRequest({ id: selectedSong._id, updatedSong: formData })
      );
      window.alert(" song updated!");
    } else {
      dispatch(createSongRequest(formData));
      window.alert("new song added!");
    }
    dispatch(closeModal());
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>{isEdit ? "Edit" : "Add"} Song</Heading>

      <Input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        placeholder="Artist"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        placeholder="Album"
        name="album"
        value={formData.album}
        onChange={handleChange}
        required
      />

      <Input
        type="number"
        placeholder="Year"
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      />

      <Input
        type="text"
        placeholder="Genre"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
      />

      <Button type="submit">{isEdit ? "Edit" : "Add"} Song</Button>

      <Cancel onClick={() => dispatch(closeModal())}>Cancel</Cancel>
    </Form>
  );
}
