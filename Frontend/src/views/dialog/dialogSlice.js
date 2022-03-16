import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: '',
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setDialogOpen: state => {
      state.open = true
    },
    setDialogType: (state, { payload: type }) => {
      state.type = type;
    },
    setDialogClosed: () => initialState,
  },
});

export const {
  setDialogOpen,
  setDialogType,
  setDialogClosed,
} = dialogSlice.actions;

const selectDialog = state => state.dialog;

export const selectDialogOpen = state => selectDialog(state).open;
export const selectDialogType = state => selectDialog(state).type;

export default dialogSlice.reducer;