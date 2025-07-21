import axios from "axios";

const baseURL = process.env.API_BASE_URL;

export const fetchSongsApi = async (page) => {
  return axios.get(`${baseURL}/api/songs?page=${page}`);
};

export const createSongApi = async (newSong) => {
  return axios.post(`${baseURL}/api/songs`, newSong);
};

export const updateSongApi = async (id, updatedSong) => {
  return axios.put(`${baseURL}/api/songs/${id}`, updatedSong);
};

export const deleteSongApi = async (id) => {
  return axios.delete(`${baseURL}/api/songs/${id}`);
};
