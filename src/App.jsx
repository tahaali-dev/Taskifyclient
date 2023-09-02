import LandingPage from "./Pages/Landing Page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Dash from "./Pages/Dashboard/Dash";
import Layout from "./Components/Layout/Layout";
import SingleTask from "./Pages/SingleTask/SingleTask";
import TaskCreation from "./Pages/TaskCreationPage/TaskCreation";
import AllTasks from "./Pages/AlltaskPage/AllTasks";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import DoneTasks from "./Pages/DoneTasks/donetask";
import SingleTaskDone from "./Pages/DoneTasks/SingleDone";
import TeacherLoginPage from "./Pages/TeacherLogin/TeacherLoginPage";
import TeacherDash from "./Components/Teacher Section/TeacherDash/TeacherDash";
import TeacherTaskCreate from "./Components/Teacher Section/TeacherTaskCreation/TeacherTaskCreate";
// ------------------Imports----------------

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/teacherlogin" element={<TeacherLoginPage />} />
        <Route element={<Layout />}>
          <Route path="/teacherdash" element={<TeacherDash />} />
          <Route path="/teachertaskcreation" element={<TeacherTaskCreate />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/single-task/:id" element={<SingleTask />} />
          <Route path="/single-task-done/:id" element={<SingleTaskDone />} />
          <Route path="/create-new" element={<TaskCreation />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/done-tasks" element={<DoneTasks />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </BrowserRouter>
  );
}
