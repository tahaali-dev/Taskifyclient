import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterSec = () => {
  return (
    <div className="w-full">
      <div
        className="footer-cont w-85
    "
      >
        <div className="foot-t">
          <h2>Drop Your Doubts Here </h2>
          <Link to="doutesec" className="doutebtn" >Ask </Link>
          ❓
        </div>

        <div className="foot-b">
          <h3>©️ 2023-Taha Ali (Taskify)</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterSec;
