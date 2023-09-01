import React from "react";
import "./AllTask.css";
import Card from "../../Components/Card/Card";

const AllTasks = () => {
  return (
    <div className="w-full">
      <div className="w-85 all-task-cont">
        <div className="search-tab">
          <div className="date-filter">
            <p>
              {" "}
              <i className="fa-regular fa-calendar-days"></i>Search By Date
            </p>
            <input type="date" />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="fliter-btns">
            <button className="fltr-btns">html</button>
            <button className="fltr-btns">css</button>
            <button className="fltr-btns">javascript</button>
            <button className="fltr-btns">english</button>
            <button className="fltr-btns">other</button>
          </div>
        </div>
        <div className="card-cont-all">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
