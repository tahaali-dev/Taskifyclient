import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    SetAuth: "",
  },
  reducers: {
    logReg: (state, action) => {
      state.SetAuth = action.payload;
    },
  },
});

export const { logReg } = appSlice.actions;
export const appReducer = appSlice.reducer;

