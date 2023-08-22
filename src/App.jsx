import LandingPage from "./Pages/Landing Page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import Dash from "./Pages/Dashboard/Dash";
import Layout from "./Components/Layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route  element={<Layout />}>
          <Route path="/dash" element={<Dash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
