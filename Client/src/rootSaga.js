import { all } from "redux-saga/effects";
import { childrenSaga } from "./views/children/childrenSaga";

export default function* rootSaga() {
  yield all([
    childrenSaga()
  ])
};