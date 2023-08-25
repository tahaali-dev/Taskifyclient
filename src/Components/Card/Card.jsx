import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const Navigate = useNavigate();

  //Navigate To Single Task
  const SingleTaskHandle = () => {
    Navigate("/single-task");
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="title">
          <h2>title Of Card dolor</h2>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aliquid rem atque, nam soluta rerum similique voluptatum cum
            repudiandae tenetur.
          </p>
        </div>

        <div className="bottom-card">
          <i className="fa-solid fa-trash-can delete"></i>
          <div className="readmore" onClick={() => SingleTaskHandle()}>
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="title">
          <h2>title Of Card dolor,</h2>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aliquid rem atque, nam soluta rerum similique voluptatum cum
            repudiandae tenetur.
          </p>
        </div>

        <div className="bottom-card">
          <i className="fa-solid fa-trash-can delete"></i>
          <div className="readmore" onClick={() => SingleTaskHandle()}>
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="title">
          <h2>title Of Card dolor,</h2>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aliquid rem atque, nam soluta rerum similique voluptatum cum
            repudiandae tenetur.
          </p>
        </div>

        <div className="bottom-card">
          <i className="fa-solid fa-trash-can delete"></i>
          <div className="readmore">
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="title">
          <h2>title Of Card dolor,</h2>
        </div>
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            aliquid rem atque, nam soluta rerum similique voluptatum cum
            repudiandae tenetur.
          </p>
        </div>

        <div className="bottom-card">
          <i className="fa-solid fa-trash-can delete"></i>
          <div className="readmore">
            <i className="fa-solid fa-circle-info"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
