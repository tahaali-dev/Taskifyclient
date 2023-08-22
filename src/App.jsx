import LandingPage from "./Pages/Landing Page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/auth" element={<AuthPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
