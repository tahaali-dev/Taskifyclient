import React from "react";
// import "./SingleTask.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CompletedTaskStudent, GetMyTasks, TaskDelete } from "../../Utils/Api";
import { format } from "date-fns";

const SingleTaskDone = () => {
  const { id } = useParams();

  //Run Query To Fetch Data
  const taskdata = JSON.parse(localStorage.getItem("comptasks"));
  // console.log(taskdata);
  const filterTask = taskdata.filter((item) => {
    if (id === item.id) {
      return item;
    }
  });
  // console.log(filterTask);

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
            </div>
          );
        })}
    </div>
  );
};

export default SingleTaskDone;
