import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Register from "../../Components/Log-RegFroms/Register";
import Login from "../../Components/Log-RegFroms/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logReg } from "../../ReduxSlices/Log-reg.js";

const LeftCont = () => {
  // const [initial, Setinitail] = useState("");
  // const Navigate = useNavigate();

  const dispatch = useDispatch();
  const SetAuth = useSelector((state) => state.SetAuth);

  // console.log(SetAuth);

  const RegisterSet = () => {
    console.log("clicked");
    // Navigate("/auth");
    // Setinitail("register");
    dispatch(logReg("register"));
    // console.log(initial);
  };

  const LoginSet = () => {
    // Setinitail("Login");
    dispatch(logReg("Login"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="inner-cont-left "
    >
      {!SetAuth ? (
        <>
          <h2>Taskify</h2>
          <button className="button1" onClick={LoginSet}>
            Login
          </button>
          <button className="button2" onClick={RegisterSet}>
            Register
          </button>
        </>
      ) : SetAuth === "register" ? (
        <Register />
      ) : (
        <Login />
      )}
    </motion.div>
  );
};

export default LeftCont;
