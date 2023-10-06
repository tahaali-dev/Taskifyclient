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
import { motion } from "framer-motion";

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
  const { isLoading, data, isSuccess } = useQuery("mytasks", () =>
    GetMyTasks(token)
  );
  // console.log(data, "api");
  if (isSuccess) {
    dispatch(SaveTasks(data));
  }

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
    DeleteMutation.mutate(id);
  };

  //Mutation Run For completed Task Creation
  const CompleteTaskMutation = useMutation(
    async (combinedata) => {
      const res = await CompletedTaskStudent(combinedata);
      if (res) {
        handleRefresh();
      }
    },
    {
      onSuccess: () => {
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

  // //reFetch On Refresh
  const handleRefresh = () => {
    queryClient.invalidateQueries("mytasks");
  };

  return (
    <div className="card-container">
      {isLoading ? (
        <Loader />
      ) : data && data.length === 0 ? (
        <p>No Tasks Avalaible</p>
      ) : (
        data.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="card"
              key={item.id}
            >
              <div className="title">
                <h3>{item.title.slice(0, 40)}...</h3>
              </div>
              <div
                className="desccard"
                onClick={() => SingleTaskHandle(item.id)}
              >
                {item.description.slice(0, 55)}...
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
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default Card;
