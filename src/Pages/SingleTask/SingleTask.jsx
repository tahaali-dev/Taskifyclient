import React from "react";
import "./SingleTask.css";

const SingleTask = () => {
  return (
    <div className="w-full">
      <div className="w-85 single-task">
        <div className="title">
          <h2>This Is Title for frist Single task Page.</h2>
        </div>

        <div className="date-cont">
          <p>25-08-2023</p>
          <p>html,css,javascript</p>
          <p className="teacher">By-Taha Ali</p>
        </div>

        <div className="desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas culpa
            perferendis sapiente ipsa quis alias optio dolorem magnam quia
            maiores! Unde excepturi dolorem odio in rem fuga ducimus! Saepe,
            accusantium quaerat officiis iusto amet molestiae perspiciatis at
            exercitationem doloremque quas quis in corrupti aut repellendus
            optio soluta laborum totam odit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos quaerat ipsum, temporibus
            expedita recusandae exercitationem vero dolorem, deserunt modi
            suscipit sint eos libero accusamus ex! Laborum quibusdam reiciendis
            amet est, iusto maxime unde quis necessitatibus beatae mollitia
            voluptatum, voluptas minima repellat dolore dolorem cupiditate quae
            quo minus vero? Itaque, reiciendis! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rem repellendus excepturi ab aperiam,
            repudiandae eius quo, hic ullam dolor quos adipisci. Autem
            doloremque, dolor rem alias minus iste. Quibusdam facere eveniet
            illum repellat praesentium veniam ipsa neque dolorum voluptatum
            distinctio officia necessitatibus, in rerum. Labore laboriosam quia
            totam. Temporibus, perferendis?
          </p>
        </div>

        <div className="button-cont">
          <button className="delete">Delete</button>
          <button className="done">Done</button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
