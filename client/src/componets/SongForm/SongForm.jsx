import React, { useState } from "react";
import { closeModal } from "../../redux/feature/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createSongRequest,
  updateSongRequest
} from "../../redux/feature/songsSLice";
import { Form, Heading, Input, Button, Cancel } from "./songFormStyled.js";

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
