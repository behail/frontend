export const BASE_URL = "https://mern-backend-uv3z.onrender.com";
// export const BASE_URL = "http://localhost:3000";
export const GetAllSongs_URL = BASE_URL;
export const AddSong_URL = `${BASE_URL}/add-song`;
export const EditSong_URL = `${BASE_URL}/edit-song/`;
export const DeleteSong_URL = `${BASE_URL}/delete-song/`;

export const SONGS = "songs";
export const GET_SONGS = `${SONGS}/getAllSongsAction`;
export const ADD_SONG = `${SONGS}/addSongAction`;
export const Edit_SONG = `${SONGS}/editSongAction`;
export const DELETE_SONG = `${SONGS}/deleteSongAction`;
