import { call, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi, removeDataFromApi, sendDataToApi } from "../../assets/utils/handleApiCalls";
import { reloadChildrenList } from "../children/childrenSlice";
import {
  selectChildData, fetchChildData, setChildData, reloadChildData,
  selectChildId, postChildData, updateChildData, deleteChildData,
  returnToChildrenList,
} from "./childSlice";

function* fetchChildDataHandler() {
  try {
    const id = yield select(selectChildId);
    const url = `../api/get/children/${id}`;
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setChildData(data));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* dispatchChildDataHandler(url, method) {
  try {
    const child = yield select(selectChildData);
    yield call(sendDataToApi, url, method, child);
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postChildDataHandler() {
  const url = "api/v1/children";
  const method = "post";
  yield call(dispatchChildDataHandler, url, method);
  yield put(reloadChildrenList());
};

function* updateChildDataHandler() {
  const id = yield select(selectChildId);
  const url = `../api/v1/children/${id}`;
  const method = "put";
  yield call(dispatchChildDataHandler, url, method);
};

function* deleteChildDataHandler() {
  const id = yield select(selectChildId);
  const url = `../api/v1/children/${id}`;
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