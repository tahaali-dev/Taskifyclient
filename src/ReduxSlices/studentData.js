import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
// console.log("data from local", user);

const Studentslice = createSlice({
  name: "Studentdata",
  initialState: {
    user: user ? user : null,
  },
  reducers: {
    dataInput: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { dataInput } = Studentslice.actions;
export const Studentreducer = Studentslice.reducer;
