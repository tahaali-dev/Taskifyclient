import React, { useState } from "react";
import "./Teacher.css";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginTeacher } from "../../Utils/TeacherApi";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { teacherInput } from "../../ReduxSlices/studentData";
import Loader from "../../Components/Loader/Loader";

const TeacherLoginPage = () => {
  //state Handle For From
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Teacher Login Mutation
  const LoginMutation = useMutation("teacher", async ({ email, password }) => {
    const response = await LoginTeacher({ email, password });
    if (response) {
      navigate("/teacherdash");
    }
    // console.log("loginRes", response);
    dispatch(teacherInput(response));
  });

  //HandleLogin
  const navigate = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    LoginMutation.mutate({ email, password });
  };

  //

  return (
    <div className="w-full">
      <div className="main-from-teach">
        <h3>Welcome Teacher ❤️</h3>
        {LoginMutation.isLoading ? (
          <Loader />
        ) : LoginMutation.isSuccess ? (
          <Navigate to="/teacherdash" />
        ) : (
          <form className="from-cont">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your Email Id 📧"
              className="t-input"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Your Password 🔑"
            />
            <button className="button1" onClick={HandleLogin}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TeacherLoginPage;
