import React, { useState } from "react";
import "./TaskCreation.css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SaveTasks } from "../../ReduxSlices/studentData";
import { CreateTaskStudent, GetMyTasks } from "../../Utils/Api";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const TaskCreation = () => {
  const dispatch = useDispatch();
  //State Manage (form)
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const sendData = { title, description, category, createdBy };

  //Get Token
  const token = useSelector((state) => state.reducer.user.token);
  const combinedata = { token, sendData };

  //Query For Tasks Fetch
  const { isLoading, data, isSuccess } = useQuery("mytasks", () =>
    GetMyTasks(token)
  );

  //Mutation Run For Task Creation
  const queryClient = useQueryClient();
  const TaskCreateMutation = useMutation(
    async (combinedata) => {
      const response = await CreateTaskStudent(combinedata);
      if (response) {
        navigate("/dash");
      }
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("mytasks");
      },
    }
  );

  // console.log(data);

  //Handle Task Form Submit
  const HandleSubmit = (e) => {
    e.preventDefault();
    TaskCreateMutation.mutate(combinedata);
  };

  return (
    <div className="w-full">
      <div className="w-85 task-create-cont">
        <h2>Create Your Own Task 📝</h2>
        <form className="create-form">
          {TaskCreateMutation.isLoading ? (
            <Loader />
          ) : (
            <>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Add Task Title"
              />

              <textarea
                cols="30"
                rows="10"
                placeholder="Enter Description For Your Task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Type Of Task</option>
                <option>html</option>
                <option>css</option>
                <option>javascript</option>
                <option>tally</option>
                <option>english</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Education</option>
                <option>other</option>
              </select>
              <input
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                type="text "
                placeholder="Write Your Name Here"
              />
              <button onClick={HandleSubmit} className="button1">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default TaskCreation;
