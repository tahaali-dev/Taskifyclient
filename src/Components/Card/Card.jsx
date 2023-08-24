import React from "react";
import "./Card.css";

const Card = () => {
  return (
     <div className="card-container">
<div className="card">
  <div className="title">This Is Task One</div>
  <div className="task-details">
    <div className="dt-1 dt">Detail-1</div>
    <div className="dt-2 dt">Detail-2</div>
    <div className="dt-3 dt">Detail-3</div>
    <div className="dt-4 dt">Detail-4</div>
    <div className="dt-5 dt">Detail-5</div>
    <div className="dt-6 dt">Detail-6</div>
  </div>
</div>
<div className="card">card1</div>
<div className="card">card1</div>
<div className="card">card1</div>
<div className="card">card1</div>
</div> 
  );
};

export default Card;


