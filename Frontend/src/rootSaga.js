import { all } from "redux-saga/effects";
import { childSaga } from "./views/child/childSaga";
import { childrenSaga } from "./views/children/childrenSaga";
import { groupSaga } from "./views/group/groupSaga";
import { groupsSaga } from "./views/groups/groupsSaga";

export default function* rootSaga() {
  yield all([
    childrenSaga(),
    childSaga(),
    groupsSaga(),
    groupSaga()
  ])
};