import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [],
  state: 'idle'
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    fetchGroupsList: () => { },
    setGroupsList: (state, { payload: groups }) => {
      state.groups = groups;
    },
    reloadGroupsList: () => initialState,
    clearGroupsList: () => initialState,
    setGroupsState: (state, {payload: newState}) => {
      state.state = newState;
    }
  },
});

export const {
  fetchGroupsList,
  setGroupsList,
  reloadGroupsList,
  clearGroupsList,
  setGroupsState
} = groupsSlice.actions;

const selectGroups = state => state.groups;
export const selectGroupsList = state => selectGroups(state).groups;
export const selectGroupsState = state => selectGroups(state).state;

export default groupsSlice.reducer;