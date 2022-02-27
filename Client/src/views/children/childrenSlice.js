import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  children: {},
};

const childrenSlice = createSlice({
  name: 'children',
  initialState,
  reducers: {
    fetchChildrenList: () => { },
    setChildrenList: (state, { payload: children }) => {
      state.children = children;
    },
    reloadChildrenList: () => initialState,
    clearChildrenList: () => initialState,
  },
});

export const {
  fetchChildrenList,
  setChildrenList,
  reloadChildrenList,
  clearChildrenList,
} = childrenSlice.actions;

export const selectChildren = state => state.children.children;

export default childrenSlice.reducer;