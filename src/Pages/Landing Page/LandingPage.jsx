import React from "react";
import HeroTop from "./HeroTop";
import NoteModal from "../../Components/NoteModal/NoteModal";
import { Navigate, Outlet } from "react-router-dom";

const LandingPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const teacher = JSON.parse(localStorage.getItem("teacher"));

 

  return (
    <>
      {user ? (
        <Navigate to="/dash" />
      ) : teacher ? (
        <Navigate to="/teacherdash" />
      ) : (
        <div>
          <HeroTop />
          <NoteModal />
        </div>
      )}
    </>
  );
};
export default LandingPage;

