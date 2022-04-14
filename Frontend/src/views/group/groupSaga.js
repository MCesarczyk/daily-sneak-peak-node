import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { reloadGroupsList } from "../groups/groupsSlice";
import { setDialogClosed } from "../dialog/dialogSlice";
import {
  selectGroupData, fetchGroupData, setGroupData, reloadGroupData,
  selectGroupId, postGroupData, updateGroupData, deleteGroupData,
  returnToGroupsList,
  setGroupState,
} from "./groupSlice";
import {
  getDataFromApi, removeDataFromApi, sendDataToApi
} from "../../assets/utils/handleApiCalls";
import { GROUPS_URL, AVATAR_URL } from "../../assets/links";
import { DEMO_DELAY } from "../../assets/data";

function* fetchGroupDataHandler() {
  try {
    const id = yield select(selectGroupId);
    const url = `${GROUPS_URL}/${id}`;
    yield put(setGroupState("loading"));
    const response = yield call(getDataFromApi, url);
    const data = yield response;
    yield put(setGroupData(data[0]));
    const avatarId = data[0].avatar;
    const avatarUrl = avatarId ? `${AVATAR_URL}/${data[0].avatar}` : '';
    yield put(setGroupData({ ...data[0], avatarUrl: avatarUrl }));
    yield delay(DEMO_DELAY);
    yield put(setGroupState("success"));
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* dispatchGroupDataHandler(url, method) {
  try {
    const group = yield select(selectGroupData);
    yield call(sendDataToApi, url, method, group);
    yield put(setDialogClosed());
  } catch (error) {
    yield call(console.error, error.message);
  }
};

function* postGroupDataHandler() {
  const url = GROUPS_URL;
  const method = "post";
  yield call(dispatchGroupDataHandler, url, method);
  yield put(reloadGroupsList());
};

function* updateGroupDataHandler() {
  const id = yield select(selectGroupId);
  const url = `${GROUPS_URL}/${id}`;
  const method = "put";
  yield call(dispatchGroupDataHandler, url, method);
};

function* deleteGroupDataHandler() {
  const id = yield select(selectGroupId);
  const url = `${GROUPS_URL}/${id}`;
  yield call(removeDataFromApi, url);
  yield put(returnToGroupsList());
};

export function* groupSaga() {
  yield takeLatest(fetchGroupData.type, fetchGroupDataHandler);
  yield takeLatest(reloadGroupData.type, fetchGroupDataHandler);
  yield takeLatest(postGroupData.type, postGroupDataHandler);
  yield takeLatest(updateGroupData.type, updateGroupDataHandler);
  yield takeLatest(deleteGroupData.type, deleteGroupDataHandler);
};