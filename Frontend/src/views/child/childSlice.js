import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  data: {},
  gotoList: false,
};

const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    fetchChildData: (state, { payload: id }) => {
      state.id = id;
    },
    setChildData: (state, { payload: child }) => {
      state.data = child;
    },
    postChildData: (state, { payload: child }) => {
      state.data = child;
    },
    updateChildData: (state, { payload: child }) => {
      state.data = child;
    },
    reloadChildData: (state, { payload: id }) => {
      state.id = id;
    },
    deleteChildData: (state, { payload: id }) => {
      state.id = id;
    },
    clearChildData: () => initialState,
    returnToChildrenList: state => { state.gotoList = true },
  },
});

export const {
  fetchChildData,
  setChildData,
  postChildData,
  updateChildData,
  reloadChildData,
  clearChildData,
  deleteChildData,
  returnToChildrenList,
} = childSlice.actions;

const selectChild = state => state.child;

export const selectChildId = state => selectChild(state).id;
export const selectChildData = state => selectChild(state).data;
export const selectChildGotoList = state => selectChild(state).gotoList;

export default childSlice.reducer;