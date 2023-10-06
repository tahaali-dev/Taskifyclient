import React, { useEffect, useState } from "react";
import "./done.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCompletedTasks } from "../../Utils/Api";
import { useQuery, useQueryClient } from "react-query";
import _, { slice } from "lodash";
import { format } from "date-fns";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { SaveTasks, SearchTasks } from "../../ReduxSlices/studentData";

const DoneTasks = () => {
  //state manage for data filter
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);

  //Run Query To Fetch Data
  const { isLoading, data } = useQuery("comptasks", () =>
    GetCompletedTasks(token)
  );

  //Navigate To Single Task
  const SingleTaskHandle = (id) => {
    Navigate(`/single-task-done/${id}`);
  };

  //Handle Search Button
  const HandleSearch = () => {
    //filter for date
    const datefilterdata = data.filter(
      (item) => format(new Date(item.date), "yyyy-MM-dd") === date
    );
    if (datefilterdata) {
      dispatch(SearchTasks(datefilterdata));
    }
  };

  //data From Redux
  const tasks = useSelector((state) => state.reducer.TasksSearchcomp);
  //HandleCategory Search as category
  const HandleCategory = (cat) => {
    console.log(cat);
    const filterdata = data.filter((item) => item.category === cat);
    if (filterdata) {
      dispatch(SearchTasks(filterdata));
    }
  };

  //reFetch On Refresh
  const queryClient = useQueryClient();
  const handleRefresh = () => {
    queryClient.invalidateQueries("comptasks");
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  // console.log(data, !tasks);

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
                            <h3>{item.title.slice(0, 40)}...</h3>
                          </div>
                          <div
                            className="desccard"
                            onClick={() => SingleTaskHandle(item.id)}
                          >
                            {item.description.slice(0, 55)}...
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
                                <h3>{item.title.slice(0, 40)}...</h3>
                              </div>
                              <div
                                className="desccard"
                                onClick={() => SingleTaskHandle(item.id)}
                              >
                                {item.description.slice(0, 55)}...
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

export default DoneTasks;
