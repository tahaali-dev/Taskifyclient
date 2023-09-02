import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateDoubteStudent } from "../../Utils/Api";

const Doubte = () => {
  const navigate = useNavigate();
  //State For Doubte
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const sendData = { title, description, createdBy };

  //Get Token
  const token = useSelector((state) => state.reducer.user.token);
  const combinedata = { token, sendData };

  //Mutation Run For Task Creation
  const DoubteCreateMutation = useMutation(async (combinedata) => {
    const response = await CreateDoubteStudent(combinedata);
    if (response) {
      navigate("/dash");
    }
  });

  //Handle Task Form Submit
  const HandleSubmit = (e) => {
    e.preventDefault();
    DoubteCreateMutation.mutate(combinedata);
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-85 task-create-cont">
          <h2>Ask Your Question ❓</h2>
          <form className="create-form">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="You Question Title"
            />

            <textarea
              cols="30"
              rows="10"
              placeholder="What You Want To Ask"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              type="text "
              placeholder="Write Your Name Here"
            />
            <button onClick={HandleSubmit} className="button1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Doubte;
