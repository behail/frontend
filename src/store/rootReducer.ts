import { combineReducers } from "@reduxjs/toolkit";
import { ISongState } from "./types";
import songReducer from "../features/song/songSlice";

export type StateType = {
  songs: ISongState;
};

const rootReducer = combineReducers({
  songs: songReducer,
});

export default rootReducer;
