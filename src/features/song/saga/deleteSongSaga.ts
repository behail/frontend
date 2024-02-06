import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteSongSuccessAction, deleteSongErrorAction } from "../songSlice";
import { DeleteSong_URL, DELETE_SONG } from "../../../constant/constant";

function* deleteSongSaga({ payload: songId }: PayloadAction<string>) {
  try {
    yield call(() =>
      axios({
        method: "DELETE",
        url: `${DeleteSong_URL}${songId}`,
      })
    );
    yield put(deleteSongSuccessAction(songId));
  } catch (error) {
    yield put(deleteSongErrorAction(error as string));
  }
}

export function* watchDeleteSong() {
  yield takeEvery(DELETE_SONG, deleteSongSaga);
}
