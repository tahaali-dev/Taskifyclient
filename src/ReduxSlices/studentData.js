import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const teacher = JSON.parse(localStorage.getItem("teacher"));
const tasks = JSON.parse(localStorage.getItem("tasks"));
const comptasks = JSON.parse(localStorage.getItem("comptasks"));
const getStudents = JSON.parse(localStorage.getItem("getstudent"));
// console.log("data from local", user);

const Studentslice = createSlice({
  name: "Studentdata",
  initialState: {
    user: user ? user : null,
    teacherdata: teacher ? teacher : null,
    getStudents: getStudents ? getStudents : null,
    MyTasks: tasks ? tasks : null,
    TasksSearchcomp: comptasks ? comptasks : null,
  },
  reducers: {
    dataInput: (state, action) => {
      state.user = action.payload;
    },
    Logout: (state, action) => {
      state.user = "";
      state.MyTasks = "";
      state.TasksSearchcomp = "";
      localStorage.removeItem("user");
      localStorage.removeItem("tasks");
      localStorage.removeItem("comptasks");
      localStorage.removeItem("getstudent");
      localStorage.removeItem("teacher");
    },
    LogoutTeacher: (state, action) => {
      state.teacherdata = "";
      state.getStudents = "";
      localStorage.removeItem("getstudent");
      localStorage.removeItem("teacher");
      localStorage.removeItem("doubte");
    },
    SaveTasks: (state, action) => {
      state.MyTasks = action.payload;
    },
    SearchTasks: (state, action) => {
      state.TasksSearchcomp = action.payload;
    },
    teacherInput: (state, action) => {
      state.teacherdata = action.payload;
    },
  },
});

export const {
  dataInput,
  Logout,
  SaveTasks,
  SearchTasks,
  teacherInput,
  LogoutTeacher,
} = Studentslice.actions;
export const Studentreducer = Studentslice.reducer;


