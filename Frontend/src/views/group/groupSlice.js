import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  data: {},
  state: 'idle',
  gotoList: false
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    fetchGroupData: (state, { payload: id }) => {
      state.id = id;
    },
    setGroupData: (state, { payload: group }) => {
      state.data = group;
    },
    postGroupData: (state, { payload: group }) => {
      state.data = group;
    },
    updateGroupData: (state, { payload: group }) => {
      state.data = group;
    },
    reloadGroupData: (state, { payload: id }) => {
      state.id = id;
    },
    deleteGroupData: (state, { payload: id }) => {
      state.id = id;
    },
    clearGroupData: () => initialState,
    setGroupState: (state, { payload: newState }) => {
      state.state = newState;
    },
    returnToGroupsList: state => { state.gotoList = true },
  },
});

export const {
  fetchGroupData,
  setGroupData,
  postGroupData,
  updateGroupData,
  reloadGroupData,
  clearGroupData,
  deleteGroupData,
  setGroupState,
  returnToGroupsList
} = groupSlice.actions;

const selectGroup = state => state.group;

export const selectGroupId = state => selectGroup(state).id;
export const selectGroupData = state => selectGroup(state).data;
export const selectGroupGotoList = state => selectGroup(state).gotoList;
export const selectGroupState = state => selectGroup(state).state;

export default groupSlice.reducer;