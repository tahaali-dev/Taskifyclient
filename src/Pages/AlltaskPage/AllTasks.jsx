import React, { useState } from "react";
import "./AllTask.css";
import Card from "../../Components/Card/Card";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { CompletedTaskStudent, GetMyTasks, TaskDelete } from "../../Utils/Api";
import _ from "lodash";
import Loader from "../../Components/Loader/Loader";
import { SaveTasks } from "../../ReduxSlices/studentData";
import { useNavigate } from "react-router-dom";

const AllTasks = () => {
  //state manage for data filter
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);

  //Run Query To Fetch Data
  const { isLoading, isSuccess, data, isError } = useQuery("mytasks", () =>
    GetMyTasks(token)
  );
  // console.log(data);

  //data From Redux
  const tasks = useSelector((state) => state.reducer.MyTasks);

  //Handle Search Button
  const HandleSearch = () => {
    // console.log("click", date);
    //filter for date
    const datefilterdata = data.filter(
      (item) => format(new Date(item.date), "yyyy-MM-dd") === date
    );
    if (datefilterdata) {
      dispatch(SaveTasks(datefilterdata));
    }
  };

  //HandleCategory Search as category
  const HandleCategory = (cat) => {
    // console.log(cat);
    const filterdata = data.filter((item) => item.category === cat);
    if (filterdata) {
      dispatch(SaveTasks(filterdata));
    }
  };

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
    // console.log("On the Way to delete");
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
    const combinedata = { token, sendData, id };
    CompleteTaskMutation.mutate(combinedata);
  };

  //Navigate To Single Task
  const Navigate = useNavigate();
  const SingleTaskHandle = (id) => {
    Navigate(`/single-task/${id}`);
  };

  return (
    <div className="w-full">
      <div className="w-85 all-task-cont">
        <div className="search-tab">
          <div className="date-filter">
            <p>
              <i className="fa-regular fa-calendar-days"></i>Search By Date
            </p>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
            <button onClick={HandleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="fliter-btns">
            <button
              className="fltr-btns"
              onClick={() => HandleCategory("html")}
            >
              html
            </button>
            <button className="fltr-btns" onClick={() => HandleCategory("css")}>
              css
            </button>
            <button
              className="fltr-btns"
              onClick={() => HandleCategory("javascript")}
            >
              javascript
            </button>
            <button
              className="fltr-btns"
              onClick={() => HandleCategory("english")}
            >
              english
            </button>
            <button
              className="fltr-btns"
              onClick={() => HandleCategory("other")}
            >
              other
            </button>

            <button
              className="fltr-btns"
              onClick={() => HandleCategory("tally")}
            >
              tally
            </button>

            <button
              className="fltr-btns"
              onClick={() => HandleCategory("Work")}
            >
              work
            </button>

            <button
              className="fltr-btns"
              onClick={() => HandleCategory("Personal")}
            >
              Personal
            </button>

            <button
              className="fltr-btns"
              onClick={() => HandleCategory("Education")}
            >
              Education
            </button>
          </div>
        </div>
        <div className="card-cont-all">
          <div className="card-container">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!tasks ? (
                  <>
                    {data?.map((item) => {
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

                          <div className="date date-done">
                            {format(new Date(item.date), "dd/MM/yyyy")}
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {tasks.length === 0 ? (
                      <p>No Tasks AvaLaible</p>
                    ) : (
                      <>
                        {" "}
                        {tasks?.map((item) => {
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

                              <div className="date date-done">
                                {format(new Date(item.date), "dd/MM/yyyy")}
                              </div>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
