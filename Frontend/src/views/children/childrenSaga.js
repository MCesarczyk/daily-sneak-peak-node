import { call, put, delay, takeLatest } from "redux-saga/effects";
import { DEMO_DELAY } from "../../assets/data";
import { CHILDREN_URL } from "../../assets/links";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import { fetchGroupsList } from "../groups/groupsSlice";
import { fetchChildrenList, reloadChildrenList, setChildrenList, setChildrenState } from "./childrenSlice";

function* fetchChildrenListHandler() {
  try {
    const url = CHILDREN_URL;
    yield put(setChildrenState("loading"));
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setChildrenList(data));
    yield put(fetchGroupsList());
    yield delay(DEMO_DELAY);
    yield put(setChildrenState("success"));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* childrenSaga() {
  yield takeLatest(fetchChildrenList.type, fetchChildrenListHandler);
  yield takeLatest(reloadChildrenList.type, fetchChildrenListHandler);
};