import React from "react";
import "./SingleTask.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetMyTasks, TaskDelete } from "../../Utils/Api";
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
                <button className="done">
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
