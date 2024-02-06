import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { SongType } from "../../../store/types";
import { addSongSuccesAction, addSongErrorAction } from "../songSlice";
import { AddSong_URL, ADD_SONG } from "../../../constant/constant";

function* addSongSaga({ payload: song }: PayloadAction<SongType>) {
  try {
    yield call(() =>
      axios({
        method: "post",
        url: AddSong_URL,
        data: song,
      })
    );
    yield put(addSongSuccesAction(song));
  } catch (error) {
    yield put(addSongErrorAction(error as string));
  }
}

export function* watchAddSong() {
  yield takeEvery(ADD_SONG, addSongSaga);
}
