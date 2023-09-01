import React from "react";
// import "./AllTask.css";
import { useSelector } from "react-redux";
import { GetCompletedTasks } from "../../Utils/Api";
import { useQuery } from "react-query";
import _ from "lodash";
import { format } from "date-fns";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const DoneTasks = () => {
  const Navigate = useNavigate();
  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);

  //Run Query To Fetch Data
  const { isLoading, isSuccess, data, isError } = useQuery("mytasks", () =>
    GetCompletedTasks(token)
  );

  //Navigate To Single Task
  const SingleTaskHandle = (id) => {
    Navigate(`/single-task/${id}`);
  };

  return (
    <div className="w-full">
      <div className="w-85 all-task-cont">
        <div className="card-cont-all">
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
                        {_.truncate(item.title, {
                          length: 48,
                          omission: "...",
                        })}
                      </h2>
                    </div>
                    <div
                      className="desccard"
                      onClick={() => SingleTaskHandle(item.id)}
                    >
                      {_.truncate(item.description, {
                        length: 110,
                        omission: "...",
                      })}
                      <p></p>
                    </div>

                    <div className="date">
                      {format(new Date(item.date), "dd/MM/yyyy")}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneTasks;
