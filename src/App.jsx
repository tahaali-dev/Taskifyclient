import LandingPage from "./Pages/Landing Page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Dash from "./Pages/Dashboard/Dash";
import Layout from "./Components/Layout/Layout";
import SingleTask from "./Pages/SingleTask/SingleTask";
import TaskCreation from "./Pages/TaskCreationPage/TaskCreation";
// ------------------Imports----------------

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/dash" element={<Dash />} />
          <Route path="/single-task" element={<SingleTask />} />
          <Route path="/create-new" element={<TaskCreation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
