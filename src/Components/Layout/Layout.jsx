import React, { useEffect } from "react";
import Navabr from "../Navbar/Navabr";
import FooterSec from "../FooterSec/FooterSec";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector((state) => state.reducer.user);
  // console.log("Reducer Layout ", user);

  const teacher = useSelector((state) => state.reducer.teacherdata);

  return (
    <>
      <Navabr />
      {user || teacher ? <Outlet /> : <Navigate to="/" />}

      <FooterSec />
    </>
  );
};

export default Layout;
