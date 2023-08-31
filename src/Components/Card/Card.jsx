import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = () => {
  const Navigate = useNavigate();

  //Navigate To Single Task
  const SingleTaskHandle = () => {
    Navigate("/single-task");
  };

  //Card data Fectch
  const Tasks = useSelector((state) => state.reducer.user.user.MyTasks);
  console.log(Tasks);

  return (
    <div className="card-container">
      {Tasks &&
        Tasks.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="title">
                <h2>{item.title}</h2>
              </div>
              <div className="desc">
                <p>{item.description}</p>
              </div>

              <div className="bottom-card">
                <i className="fa-solid fa-trash-can deletei"></i>
                <div className="readmore" onClick={() => SingleTaskHandle()}>
                  <i className="fa-solid fa-circle-info"></i>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
