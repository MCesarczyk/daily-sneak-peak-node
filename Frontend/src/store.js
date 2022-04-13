import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import childrenReducer from "./views/children/childrenSlice";
import childReducer from "./views/child/childSlice";
import groupsReducer from "./views/groups/groupsSlice";
import dialogReducer from "./views/dialog/dialogSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    children: childrenReducer,
    child: childReducer,
    groups: groupsReducer,
    dialog: dialogReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;