import { call, put, delay, takeLatest } from "redux-saga/effects";
import { DEMO_DELAY } from "../../assets/data";
import { CHILDREN_LIST_URL } from "../../assets/links";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import { fetchChildrenList, reloadChildrenList, setChildrenList, setChildrenState } from "./childrenSlice";

function* fetchChildrenListHandler() {
  try {
    const url = CHILDREN_LIST_URL;
    yield put(setChildrenState("loading"));
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield delay(DEMO_DELAY);
    yield put(setChildrenList(data));
    yield put(setChildrenState("success"));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* childrenSaga() {
  yield takeLatest(fetchChildrenList.type, fetchChildrenListHandler);
  yield takeLatest(reloadChildrenList.type, fetchChildrenListHandler);
};