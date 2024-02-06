import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { ISongState } from "../../../store/types";
import { getAllSongsSuccessAction, getAllSongsErrorAction } from "../songSlice";
import { GetAllSongs_URL, GET_SONGS } from "../../../constant/constant";

function* getSongsSaga() {
  try {
    const response: AxiosResponse<ISongState> = yield call(() =>
      axios.get(GetAllSongs_URL)
    );
    yield put(getAllSongsSuccessAction(response.data));
  } catch (error) {
    yield put(getAllSongsErrorAction(error as string));
  }
}

export function* watchGetSongs() {
  yield takeEvery(GET_SONGS, getSongsSaga);
}
