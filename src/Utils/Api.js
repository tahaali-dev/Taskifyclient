import axios from "axios";
import { toast } from "react-hot-toast";

// ------------------Imports----------------------------
export const apiUrl = axios.create({
  baseURL: "https://taskify-server-a3p1.onrender.com",
});

//Student Register
export const RegisterStudent = async ({ name, email, password }) => {
  try {
    // console.log({email,password});
    const response = await apiUrl.post("/student/register", {
      name,
      email,
      password,
    });
    // console.log(response.data);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Register Success");
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Student Login
export const LoginStudent = async ({ email, password }) => {
  try {
    // console.log({email,password});
    const response = await apiUrl.post("/student/login", { email, password });
    // console.log(response.data);
    if (response) {
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Login Success");
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Student Login
export const GetMyTasks = async (token) => {
  try {
    // console.log(token);
    const response = await apiUrl.get("/student/mytasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Task Delete
export const TaskDelete = async (id) => {
  try {
    console.log(id);
    const response = await apiUrl.delete(`/student/deleteTask/${id}`);
    console.log(response.data);
    if (response) {
      toast.success("Delete Success");
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};
