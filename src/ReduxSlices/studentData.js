import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const tasks = JSON.parse(localStorage.getItem("tasks"));
const comptasks = JSON.parse(localStorage.getItem("comptasks"));
// console.log("data from local", user);

const Studentslice = createSlice({
  name: "Studentdata",
  initialState: {
    user: user ? user : null,
    MyTasks: tasks ? tasks : null,
    TasksSearchcomp: comptasks ? comptasks : null,
  },
  reducers: {
    dataInput: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state, action) => {
      state.user = "";
      localStorage.removeItem("user");
    },
    SaveTasks: (state, action) => {
      state.MyTasks = action.payload;
    },
    SearchTasks: (state, action) => {
      state.TasksSearchcomp = action.payload;
    },
  },
});

export const { dataInput, Logout, SaveTasks,SearchTasks } = Studentslice.actions;
export const Studentreducer = Studentslice.reducer;
