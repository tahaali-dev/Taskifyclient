import React, { useState } from "react";
import "./AuthFrom.css";
import { useDispatch, useSelector } from "react-redux";
import { logReg } from "../../ReduxSlices/Log-reg";
import { useQueryClient, useMutation } from "react-query";
import { LoginStudent } from "../../Utils/Api";
import { dataInput } from "../../ReduxSlices/studentData.js";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";
// ---------------------Imports-------------------------

const Login = ({ Setinitail }) => {
  const dispatch = useDispatch(); // this is for reg form -----
  const navigate = useNavigate();

  //state Handle For From
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Mutation Run
  const queryClient = useQueryClient();

  const LoginMutation = useMutation("user",async ({ email, password }) => {
    const response = await LoginStudent({ email, password });
    // console.log("loginRes", response);
    dispatch(dataInput(response));
  });

  const user = useSelector((state) => state.reducer.user);
  // console.log("Reducer Layout ", user);

  //Handle Form
  const HandleLoginForm = (e) => {
    e.preventDefault();
    LoginMutation.mutate({ email, password });

    // navigate("/dash");
  };
  return (
    <div className="main-from">
      {LoginMutation.isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>Welcome Back ❤️</h3>
          <form className="from-cont">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email Id 📧"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your Password 🔑"
            />
            <button className="button1" onClick={HandleLoginForm}>
              Login
            </button>
          </form>
          <button
            className="link-btn"
            onClick={() => dispatch(logReg("register"))}
          >
            I Don't Have A Account
          </button>
        </>
      )}
      {LoginMutation.isSuccess ? <Navigate to="/dash" /> : <Navigate to="/" />}
    </div>
  );
};

export default Login;
