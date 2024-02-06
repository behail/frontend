import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { SongType } from "../../../store/types";
import { editSongSuccessAction, editSongErrorAction } from "../songSlice";
import { Edit_SONG, EditSong_URL } from "../../../constant/constant";

function* editSongSaga({ payload }: PayloadAction<SongType>) {
  try {
    const songId = payload._id;
    const updatedSong = payload;
    yield call(() =>
      axios({
        method: "PUT",
        url: `${EditSong_URL}${songId}`,
        data: updatedSong,
      })
    );
    yield put(editSongSuccessAction(updatedSong));
  } catch (error) {
    yield put(editSongErrorAction(error as string));
  }
}

export function* watchEditSong() {
  yield takeEvery(Edit_SONG, editSongSaga);
}
