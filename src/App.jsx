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
// ------------------Imports----------------

export default function App() {
  // const SetAuth = useSelector((state) => state.reducer);
  // console.log("reducer", SetAuth.userId);
  // const User = SetAuth.userId;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
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
