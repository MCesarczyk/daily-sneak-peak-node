import { call, put, select, takeLatest } from "redux-saga/effects";
import { reloadChildrenList } from "../children/childrenSlice";
import { setDialogClosed } from "../dialog/dialogSlice";
import {
  selectChildData, fetchChildData, setChildData, reloadChildData,
  selectChildId, postChildData, updateChildData, deleteChildData,
  returnToChildrenList,
} from "./childSlice";
import {
  getDataFromApi, removeDataFromApi, sendDataToApi
} from "../../assets/utils/handleApiCalls";
import { CHILDREN_URL, AVATAR_URL } from "../../assets/links";

function* fetchChildDataHandler() {
  try {
    const id = yield select(selectChildId);
    const url = `${CHILDREN_URL}/${id}`;
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setChildData(data[0]));
    const avatarId = data[0].avatar;
    const avatarUrl = avatarId ? `${AVATAR_URL}/${data[0].avatar}` : '';
    yield put(setChildData({ ...data[0], avatarUrl: avatarUrl }));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* dispatchChildDataHandler(url, method) {
  try {
    const child = yield select(selectChildData);
    yield call(sendDataToApi, url, method, child);
    yield put(setDialogClosed());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postChildDataHandler() {
  const url = CHILDREN_URL;
  const method = "post";
  yield call(dispatchChildDataHandler, url, method);
  yield put(reloadChildrenList());
};

function* updateChildDataHandler() {
  const id = yield select(selectChildId);
  const url = `${CHILDREN_URL}/${id}`;
  const method = "put";
  yield call(dispatchChildDataHandler, url, method);
};

function* deleteChildDataHandler() {
  const id = yield select(selectChildId);
  const url = `${CHILDREN_URL}/${id}`;
  yield call(removeDataFromApi, url);
  yield put(returnToChildrenList());
};

export function* childSaga() {
  yield takeLatest(fetchChildData.type, fetchChildDataHandler);
  yield takeLatest(reloadChildData.type, fetchChildDataHandler);
  yield takeLatest(postChildData.type, postChildDataHandler);
  yield takeLatest(updateChildData.type, updateChildDataHandler);
  yield takeLatest(deleteChildData.type, deleteChildDataHandler);
};