import React, { useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { format } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CompletedTaskStudent, GetMyTasks, TaskDelete } from "../../Utils/Api";
import Loader from "../Loader/Loader";
import { SaveTasks } from "../../ReduxSlices/studentData.js";
// ----------------------------Imports--------------------------------

const Card = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  //Navigate To Single Task
  const SingleTaskHandle = (id) => {
    Navigate(`/single-task/${id}`);
  };

  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);
  // console.log(token);

  //Run Query To Fetch Data
  const { isLoading, isSuccess, data, isError } = useQuery("mytasks", () =>
    GetMyTasks(token)
  );
  // console.log(data);

  const handleRefresh = () => {
    queryClient.invalidateQueries("mytasks");
  };

  //Use Effect
  useEffect(() => {
    handleRefresh();
  }, []);

  //Mutation Run
  const queryClient = useQueryClient();
  const DeleteMutation = useMutation((id) => TaskDelete(id), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("mytasks");
    },
  });

  //Handle Delete
  const HandleDelete = (id) => {
    console.log("On the Way to delete");
    DeleteMutation.mutate(id);
  };

  //Mutation Run For completed Task Creation
  const CompleteTaskMutation = useMutation(
    async (combinedata) => {
      const response = await CompletedTaskStudent(combinedata);
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
    const combinedata = { token, sendData,id };
    CompleteTaskMutation.mutate(combinedata);
  };

  return (
    <div className="card-container">
      {isLoading ? (
        <Loader />
      ) : (
        data &&
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
