import { all } from "redux-saga/effects";
import { childSaga } from "./views/child/childSaga";
import { childrenSaga } from "./views/children/childrenSaga";

export default function* rootSaga() {
  yield all([
    childrenSaga(),
    childSaga(),
  ])
};