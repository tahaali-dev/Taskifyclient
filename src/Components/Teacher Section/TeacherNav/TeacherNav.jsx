import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { LogoutTeacher } from "../../../ReduxSlices/studentData";
// ------------Imports---------------------

const TeacherNavabr = () => {
  const dispatch = useDispatch();
  //State For Menu State
  const [menu, SetMenu] = useState("m-m-c");
  const MobileMenuHandle = () => {
    if (menu === "m-m-c") {
      SetMenu((prev) => "mobile-menu");
    } else {
      SetMenu("m-m-c");
    }
  };

  //Logout Handle
  const LogoutHandle = () => {
    console.log("click");
    dispatch(LogoutTeacher());
  };

  return (
    <>
      <div className="w-full full-nav">
        <div className="w-85 nav-cont">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="left-nav"
          >
            <Link className="link" to="/teacherdash">
              <i className="fa-solid fa-house"></i>Home
            </Link>

            <Link className="link">
              <i className="fa-solid fa-list-ol"></i>All
            </Link>

            <Link to="/teachertaskcreation" className="link">
              <i className="fa-solid fa-plus"></i>Create
            </Link>

            {/* <Link to="/done-tasks" className="link">
              <i className="fa-solid fa-check-double"></i>Done
            </Link> */}

            <Link className="link" onClick={LogoutHandle}>
              <i className="fa-solid fa-right-from-bracket"></i>Logout
            </Link>
          </motion.div>
          <div className="center">
            <h2>Taskify</h2>
          </div>
          <div className="right-nav">
            <h2>T</h2>
          </div>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="w-full m-full ">
        <div className="mo-nav">
          <div className="left-m">
            <h2>Taskify</h2>
          </div>

          <div className="right-m" onClick={MobileMenuHandle}>
            <i className="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>

      <div className={menu}>
        <div className="m-menu">
          <Link className=" m-menu-1 menu" onClick={() => SetMenu("m-m-c")}>
            <i className="fa-solid fa-list-ol"></i>All
          </Link>
          <Link
            // to="/done-tasks"
            className="m-menu-2 menu"
            onClick={() => SetMenu("m-m-c")}
          >
            <i
              className="fa-solid fa-check-double"
              onClick={() => SetMenu("m-m-c")}
            ></i>
            Done
          </Link>

          <Link
            to="/teachertaskcreation"
            className="m-menu-3 menu"
            onClick={() => SetMenu("m-m-c")}
          >
            <i className="fa-solid fa-plus"></i>Create
          </Link>

          <Link className="m-menu-4 menu" onClick={LogoutHandle}>
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </Link>

          <Link className="m-menu-5 menu" onClick={MobileMenuHandle}>
            <i className="fa-regular fa-circle-xmark"></i>Close
          </Link>

          <Link
            to="/teacherdash"
            className="m-menu-6 menu"
            onClick={() => SetMenu("m-m-c")}
          >
            <i className="fa-solid fa-house"></i>Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeacherNavabr;
