import axios from "axios";
import { toast } from "react-hot-toast";

// ------------------Imports----------------------------
export const apiUrl = axios.create({
  baseURL: "https://drab-rose-yak-boot.cyclic.app",
});

//Teacher Login
export const LoginTeacher = async ({ email, password }) => {
  try {
    // console.log({email,password});
    const response = await apiUrl.post("/teacher/login", { email, password });
    // console.log(response.data);
    if (response) {
      localStorage.setItem("teacher", JSON.stringify(response.data));
      toast.success("Login Success");
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Get Students
export const GetStudents = async (token) => {
  try {
    // console.log(token);
    const response = await apiUrl.get("/teacher/getstudent", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    if (response) {
      localStorage.setItem("getstudent", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Student Create Tasks
export const CreateTaskTeacher = async (sendData) => {
  try {
    console.log(sendData);
    const response = await apiUrl.post("teacher/newtask", sendData);
    if (response) {
      toast.success("Your Task Added");
    }
    return response.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

//Get Doubtes
export const GetDoutes = async (token) => {
  try {
    // console.log(token);
    const response = await apiUrl.get("/teacher/getdoubte", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data);
    if (response) {
      localStorage.setItem("doubte", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};
