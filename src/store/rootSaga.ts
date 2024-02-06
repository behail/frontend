import { all, fork } from "redux-saga/effects";
import { watchAddSong } from "../features/song/saga/addSongSaga";
import { watchGetSongs } from "../features/song/saga/getAllSongsSaga";
import { watchEditSong } from "../features/song/saga/editSongSaga";
import { watchDeleteSong } from "../features/song/saga/deleteSongSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetSongs),
    fork(watchAddSong),
    fork(watchEditSong),
    fork(watchDeleteSong),
  ]);
};

export default rootSaga;
