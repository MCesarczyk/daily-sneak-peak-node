import { call, put, delay, takeLatest } from "redux-saga/effects";
import { CHILDREN_LIST_URL } from "../../assets/links";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import { fetchChildrenList, reloadChildrenList, setChildrenList } from "./childrenSlice";

function* fetchChildrenListHandler() {
  try {
    const url = CHILDREN_LIST_URL;
    const response = yield call(getDataFromApi, url);
    yield delay(300);
    const data = yield response;
    yield delay(300);
    yield put(setChildrenList(data));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* childrenSaga() {
  yield takeLatest(fetchChildrenList.type, fetchChildrenListHandler);
  yield takeLatest(reloadChildrenList.type, fetchChildrenListHandler);
};