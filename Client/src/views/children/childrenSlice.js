import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  children: [],
  state: 'idle'
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
    setChildrenState: (state, {payload: newState}) => {
      state.state = newState;
    }
  },
});

export const {
  fetchChildrenList,
  setChildrenList,
  reloadChildrenList,
  clearChildrenList,
  setChildrenState
} = childrenSlice.actions;

const selectChildren = state => state.children;
export const selectChildrenList = state => selectChildren(state).children;
export const selectChildrenState = state => selectChildren(state).state;

export default childrenSlice.reducer;