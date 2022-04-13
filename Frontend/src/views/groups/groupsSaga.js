import { call, put, delay, takeLatest } from "redux-saga/effects";
import { DEMO_DELAY } from "../../assets/data";
import { GROUPS_URL } from "../../assets/links";
import { getDataFromApi } from "../../assets/utils/handleApiCalls";
import { fetchGroupsList, reloadGroupsList, setGroupsList, setGroupsState } from "./groupsSlice";

function* fetchGroupsListHandler() {
  try {
    const url = GROUPS_URL;
    yield put(setGroupsState("loading"));
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield delay(DEMO_DELAY);
    yield put(setGroupsList(data));
    yield put(setGroupsState("success"));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

export function* groupsSaga() {
  yield takeLatest(fetchGroupsList.type, fetchGroupsListHandler);
  yield takeLatest(reloadGroupsList.type, fetchGroupsListHandler);
};