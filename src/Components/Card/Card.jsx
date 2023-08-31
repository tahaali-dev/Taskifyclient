import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";
import { format } from "date-fns";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetMyTasks, TaskDelete } from "../../Utils/Api";
import Loader from "../Loader/Loader";

const Card = () => {
  const Navigate = useNavigate();

  //Navigate To Single Task
  const SingleTaskHandle = () => {
    Navigate("/single-task");
  };

  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);
  // console.log(token);

  //Run Query To Fetch Data
  const { isLoading, isSuccess, data, isError } = useQuery("mytasks", () =>
    GetMyTasks(token)
  );
  console.log(isLoading, isSuccess, data, isError);

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
              <div className="desccard">
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
                <div className="readmore" onClick={() => SingleTaskHandle()}>
                  <i className="fa-solid fa-circle-info"></i>
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
