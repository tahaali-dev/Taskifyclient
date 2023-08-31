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
    Logout: (state, action) => {
      state.user = "";
      localStorage.removeItem("user");
    },
  },
});

export const { dataInput, Logout } = Studentslice.actions;
export const Studentreducer = Studentslice.reducer;
