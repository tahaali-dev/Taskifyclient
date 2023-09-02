import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logReg } from "../../ReduxSlices/Log-reg";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { RegisterStudent } from "../../Utils/Api";
import Loader from "../Loader/Loader";
import { Navigate } from "react-router-dom";
import { dataInput } from "../../ReduxSlices/studentData";

const Register = () => {
  const dispatch = useDispatch();

  //State Manage
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");
  // console.log({ name, email, password });

  //Mutation Run
  const queryClient = useQueryClient();
  const RegisterMutation = useMutation(async ({ name, email, password }) => {
    const response = await RegisterStudent({ name, email, password });
    console.log("RegisterRes", response);
    dispatch(dataInput(response));
  });

  //Handle Register
  const HandleRegister = (e) => {
    e.preventDefault();
    if (!password === conpassword) {
      toast.error("Password Don't Match");
    } else {
      RegisterMutation.mutate({ name, email, password });
    }
  };
  return (
    <div className="main-from">
      {RegisterMutation.isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h3>Welcome To Taskify ❤️</h3>
          <form className="from-cont">
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Your Good Name 🙂"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email Id 📧"
            />
            <select>
              <option>Select Teacher</option>
              <option>TahaAli(fullStackDev,Tally)</option>
              <option>Mohammed(frontend dev)</option>
              <option>Zainab(frontend dev)</option>
            </select>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your Password 🔑"
            />
            <input
              type="password"
              placeholder="Please Confrim Your Password 🔐"
            />
            <button onClick={HandleRegister} className="button2">
              Register
            </button>
          </form>
          <button
            className="link-btn"
            onClick={() => dispatch(logReg("Login"))}
          >
            I Already Have A Account
          </button>
        </>
      )}
      {RegisterMutation.isSuccess ? (
        <Navigate to="/dash" />
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Register;
