import React from "react";
import Navabr from "../../Components/Navbar/Navabr";
import { Outlet } from "react-router-dom";
import DashTop from "../../Components/DashComponents/DashTop";
import Card from "../../Components/Card/Card.jsx";
import FooterSec from "../../Components/FooterSec/FooterSec";

const Dash = () => {
  return (
    <div className="w-full">
      <div className="w-85 Dash ">
        <DashTop />
        <Card />
        <FooterSec/>
      </div>
    </div>
  );
};

export default Dash;
