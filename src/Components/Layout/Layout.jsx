import React, { useEffect } from "react";
import Navabr from "../Navbar/Navabr";
import FooterSec from "../FooterSec/FooterSec";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import TeacherNavabr from "../Teacher Section/TeacherNav/TeacherNav";
import TeachFooterSec from "../Teacher Section/TeacherFooter/TeacherFooter";

const Layout = () => {
  const user = useSelector((state) => state.reducer.user);
  // console.log("Reducer Layout ", user);

  const teacher = useSelector((state) => state.reducer.teacherdata);

  return (
    <>
      {user ? <Navabr /> : <TeacherNavabr />}
      {user || teacher ? <Outlet /> : <Navigate to="/" />}

      {user ? <FooterSec /> : <TeachFooterSec />}
    </>
  );
};

export default Layout;
