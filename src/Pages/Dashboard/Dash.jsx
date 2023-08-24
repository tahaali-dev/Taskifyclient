import React from "react";
import Navabr from "../../Components/Navbar/Navabr";
import { Outlet } from "react-router-dom";
import DashTop from "../../Components/DashComponents/DashTop";
import Card from "../../Components/Card/Card.jsx";

const Dash = () => {
  return (
    <div className="w-full">
      <div className="w-85 Dash ">
        <DashTop />
        <Card />
      </div>
    </div>
  );
};

export default Dash;
