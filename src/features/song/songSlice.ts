import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SongType, ISongState } from "../../store/types";
import { SONGS } from "../../constant/constant";

const songsInitialState: ISongState = {
  songs: [],
  artistList: [],
  albumsList: [],
  genresList: [],
  isLoading: false,
  errors: "",
};

const songSlice = createSlice({
  name: SONGS,
  initialState: songsInitialState,
  reducers: {
    //Fetch Songs Start
    getAllSongsAction: (state: ISongState) => {
      state.isLoading = true;
      state.errors = "";
    },
    getAllSongsSuccessAction: (
      state: ISongState,
      { payload }: PayloadAction<ISongState>
    ) => {
      state.isLoading = false;
      state.songs = payload.songs;
      state.artistList = payload.artistList;
      state.albumsList = payload.albumsList;
      state.genresList = payload.genresList;
    },
    getAllSongsErrorAction: (
      state: ISongState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
    //Fetch Songs End
    /////////////////////////////////////////////
    //Add Songs Start
    addSongAction(state: ISongState, action: PayloadAction<SongType>) {
      state.isLoading = true;
      state.errors = "";
    },
    addSongSuccesAction: (
      state: ISongState,
      { payload: song }: PayloadAction<SongType>
    ) => {
      state.songs.unshift(song);
      state.isLoading = false;
    },
    addSongErrorAction: (
      state: ISongState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
    //Add Songs End
    /////////////////////////////////////////////
    //Edit Songs Start
    editSongAction(state: ISongState, action: PayloadAction<SongType>) {
      state.isLoading = true;
      state.errors = "";
    },
    editSongSuccessAction(
      state: ISongState,
      { payload: upddatedSong }: PayloadAction<SongType>
    ) {
      const index = state.songs.findIndex(
        (song) => song._id === upddatedSong._id
      );
      if (index !== -1) {
        state.songs[index] = upddatedSong;
      }
      state.isLoading = false;
    },
    editSongErrorAction: (
      state: ISongState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
    //Edit Songs End
    /////////////////////////////////////////////
    //Delete Songs Start
    deleteSongAction(state: ISongState, action: PayloadAction<string>) {
      state.isLoading = true;
      state.errors = "";
    },
    deleteSongSuccessAction(state: ISongState, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.isLoading = false;
    },
    deleteSongErrorAction: (
      state: ISongState,
      { payload: error }: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.errors = error;
    },
    //Delete Songs End
  },
});

export const {
  getAllSongsAction,
  getAllSongsSuccessAction,
  getAllSongsErrorAction,
  addSongAction,
  addSongSuccesAction,
  addSongErrorAction,
  editSongAction,
  editSongSuccessAction,
  editSongErrorAction,
  deleteSongAction,
  deleteSongSuccessAction,
  deleteSongErrorAction,
} = songSlice.actions;
export default songSlice.reducer;
