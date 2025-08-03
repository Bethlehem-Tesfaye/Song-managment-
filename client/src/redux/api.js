import axios from "axios";

const baseURL = process.env.API_BASE_URL;
axios.defaults.withCredentials = true;

// songs
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

// users
export const registerUserApi = async (newUser) => {
  return axios.post(`${baseURL}/api/auth/register`, newUser);
};

export const loginUserApi = async (user) => {
  return axios.post(`${baseURL}/api/auth/login`, user);
};

export const logoutApi = () => {
  return axios.post(
    `${baseURL}/api/auth/logout`,
    {},
    { withCredentials: true }
  );
};
export const forgotPasswordApi = async (email) => {
  return await axios.post(`${baseURL}/api/auth/forgot-password`, {
    email
  });
};
export const resetPasswordApi = async (data) => {
  return await axios.patch(`${baseURL}/api/auth/reset-password`, data);
};
