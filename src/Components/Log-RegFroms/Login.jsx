import React, { useState } from "react";
import "./AuthFrom.css";
import { useDispatch } from "react-redux";
import { logReg } from "../../ReduxSlices/Log-reg";


const Login = ({ Setinitail }) => {
    const dispatch = useDispatch();

  return (
    <div className="main-from">
      <h3>Welcome Back ❤️</h3>
      <form className="from-cont">
        <input type="text" placeholder="Your Email Id 📧" />
        <input type="password" placeholder="Your Password 🔑" />
        <button className="button1">Login</button>
      </form>
      <button className="link-btn" onClick={()=>dispatch(logReg("register"))}>I Don't Have A Account</button>
    </div>
  );
};

export default Login;
