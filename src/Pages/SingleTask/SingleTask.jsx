import React from "react";
import "./SingleTask.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CompletedTaskStudent, GetMyTasks, TaskDelete } from "../../Utils/Api";
import { format } from "date-fns";

const SingleTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);

  //Run Query To Fetch Data
  const taskdata = JSON.parse(localStorage.getItem("tasks"));
  // console.log(taskdata);
  const filterTask = taskdata.filter((item) => {
    if (id === item.id) {
      return item;
    }
  });
  // console.log(filterTask);

  //Mutation Run for Delete
  const queryClient = useQueryClient();
  const DeleteMutation = useMutation(
    async (id) => {
      const response = await TaskDelete(id);
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

  //Handle Delete
  const HandleDelete = (id) => {
    console.log("On the Way to delete", id);
    DeleteMutation.mutate(id);
  };

  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);

  //Mutation Run For completed Task Creation
  const CompleteTaskMutation = useMutation(
    async (combinedata) => {
      const response = await CompletedTaskStudent(combinedata);
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

   
  //Handle Completed
  const HandleCompleted = (task) => {
    // console.log(task);
    const sendData = {
      title: task.title,
      description: task.description,
      category: task.category,
      createdBy: task.createdBy,
    };
    const id = task.id;
    console.log(id);
    const combinedata = { token, sendData, id };
    CompleteTaskMutation.mutate(combinedata);
  };

  return (
    <div className="w-full">
      {filterTask &&
        filterTask.map((item) => {
          return (
            <div className="w-85 single-task" key={item.id}>
              <div className="title">
                <h2>{item.title}</h2>
              </div>

              <div className="date-cont">
                <p>{format(new Date(item.date), "dd/MM/yyyy")}</p>
                <p>{item.category}</p>
                <p className="teacher">{item.createdBy}</p>
              </div>

              <div className="desc">
                <p>{item.description}</p>
              </div>

              <div className="button-cont">
                <button
                  className="delete"
                  onClick={() => HandleDelete(item.id)}
                >
                  <i className="fa-solid fa-trash-can deletei"></i>
                </button>
                <button className="done" onClick={() => HandleCompleted(item)}>
                  <i className="fa-solid fa-check-double"></i>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleTask;
