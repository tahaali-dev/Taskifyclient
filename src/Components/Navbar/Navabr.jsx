import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navabr = () => {
  const [menu, SetMenu] = useState("m-m-c");

  const MobileMenuHandle = () => {
    if (menu === "m-m-c") {
      SetMenu((prev) => "mobile-menu");
    } else {
      SetMenu("m-m-c");
    }
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
            <Link className="link">
              <i className="fa-solid fa-list-ol"></i>All
            </Link>
            <Link className="link">
              <i className="fa-solid fa-check-double"></i>Done
            </Link>

            <Link to="/create-new" className="link">
              <i className="fa-solid fa-plus"></i>Create
            </Link>

            <Link className="link">
              <i className="fa-solid fa-magnifying-glass"></i>Find
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
          <Link className="m-menu-2 menu" onClick={() => SetMenu("m-m-c")}> 
            <i className="fa-solid fa-check-double" onClick={() => SetMenu("m-m-c")}></i>Done
          </Link>

          <Link to="/create-new" className="m-menu-3 menu" onClick={() => SetMenu("m-m-c")}>
            <i className="fa-solid fa-plus"></i>Create
          </Link>

          <Link className="m-menu-4 menu" onClick={() => SetMenu("m-m-c")}>
            <i className="fa-solid fa-magnifying-glass"></i>Find
          </Link>

          <Link className="m-menu-5 menu" onClick={MobileMenuHandle}
          
      >
            <i className="fa-regular fa-circle-xmark"></i>Close
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navabr;
