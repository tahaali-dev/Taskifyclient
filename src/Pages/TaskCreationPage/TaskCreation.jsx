import React from "react";
import "./TaskCreation.css";

const TaskCreation = () => {
  return (
    <div className="w-full">
      <div className="w-85 task-create-cont">
        <h2>Create Your Own Task 📝</h2>
        <form>
          <input type="text" placeholder="Add Task Title" />
          <input type="date" value="yyyy-mm-dd"/>
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Description For Your Task"
          ></textarea>
          <select>
            <option>Select Type Of Task</option>
            <option>Personal</option>
            <option>Education</option>
            <option>Work</option>
            <option>Other</option>
          </select>
          <input type="text " placeholder="Add some-notes (optional)" />
          <button className="button1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TaskCreation;
