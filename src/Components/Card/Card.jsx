import React, { useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { format } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CompletedTaskStudent, GetMyTasks, TaskDelete } from "../../Utils/Api";
import Loader from "../Loader/Loader";
import { SaveTasks, SearchTasks } from "../../ReduxSlices/studentData.js";
// ----------------------------Imports--------------------------------

const Card = () => {
  //Navigate To Single Task
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const SingleTaskHandle = (id) => {
    Navigate(`/single-task/${id}`);
  };

  //Token Fetch
  const token = useSelector((state) => state.reducer.user.token);

  //Query For Tasks Fetch
  const { isLoading, data } = useQuery("mytasks", () => GetMyTasks(token));

  //Mutation Run For Delete Task
  const queryClient = useQueryClient();
  const DeleteMutation = useMutation((id) => TaskDelete(id), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("mytasks");
    },
  });

  //Handle Delete Function
  const HandleDelete = (id) => {
    console.log("On the Way to delete");
    DeleteMutation.mutate(id);
  };


  //Mutation Run For completed Task Creation
  const CompleteTaskMutation = useMutation(
    (combinedata) => {
      CompletedTaskStudent(combinedata);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("mytasks");
      },
    }
  );

  //Completed Task
  const HandleCompleted = (task) => {
    const sendData = {
      title: task.title,
      description: task.description,
      category: task.category,
      createdBy: task.createdBy,
    };
    const id = task.id;
    const combinedata = { token, sendData, id };
    CompleteTaskMutation.mutate(combinedata);
  };

  //reFetch On Refresh
  const handleRefresh = () => {
    queryClient.invalidateQueries("mytasks");
  };
 
  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div className="card-container">
      {isLoading ? (
        <Loader />
      ) : data && data.length === 0 ? (
        <p>No Tasks Avalaible</p>
      ) : (
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="title">
                <h2>
                  {_.truncate(item.title, { length: 48, omission: "..." })}
                </h2>
              </div>
              <div
                className="desccard"
                onClick={() => SingleTaskHandle(item.id)}
              >
                {_.truncate(item.description, { length: 110, omission: "..." })}
                <p></p>
              </div>

              <div className="bottom-card">
                <i
                  className="fa-solid fa-trash-can deletei"
                  onClick={() => HandleDelete(item.id)}
                ></i>
                <div className="date">
                  {format(new Date(item.date), "dd/MM/yyyy")}
                </div>
                <div className="readmore" onClick={() => HandleCompleted(item)}>
                  <i className="fa-solid fa-check-double"></i>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
