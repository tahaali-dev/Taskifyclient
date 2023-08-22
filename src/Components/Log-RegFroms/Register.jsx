import React from "react";
import { useDispatch } from "react-redux";
import { logReg } from "../../ReduxSlices/Log-reg";

const Register = () => {
    const dispatch = useDispatch();


  return (
    <div className="main-from">
      <h3>Welcome To Taskify ❤️</h3>
      <form className="from-cont">
        <input type="text" placeholder="Your Good Name 🙂" />
        <input type="text" placeholder="Your Email Id 📧" />
        <input type="password" placeholder="Your Password 🔑" />
        <input type="password" placeholder="Please Confrim Your Password 🔐" />
        <button className="button2">Register</button>
      </form>
      <button className="link-btn" onClick={()=>dispatch(logReg("Login"))}>I Already Have A Account</button>
    </div>
  );
};

export default Register;
