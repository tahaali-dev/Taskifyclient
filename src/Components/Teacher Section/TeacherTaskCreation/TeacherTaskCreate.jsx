import React, { useState } from "react";
import { CreateTaskTeacher, GetStudents } from "../../../Utils/TeacherApi";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const TeacherTaskCreate = () => {
  const navigate = useNavigate();
  //State For Task Creation
  const [studentId, setStudentId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const combinedata = { title, description, category, createdBy, studentId };
  // console.log(combinedata);

  const studentdata = useSelector((state) => state.reducer.getStudents);

  //Mutation Run For Task Creation
  const queryClient = useQueryClient();
  const TaskCreateMutation = useMutation(async (combinedata) => {
    const response = await CreateTaskTeacher(combinedata);
    if (response) {
      navigate("/teacherdash");
    }
  });

  //Handle Task Form Submit
  const HandleSubmit = (e) => {
    e.preventDefault();
    TaskCreateMutation.mutate(combinedata);
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-85 task-create-cont">
          <h2>Create Your Own Task 📝</h2>
          <form className="create-form">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Add Task Title"
            />

            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Description For Your Task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Type Of Task</option>
              <option>html</option>
              <option>css</option>
              <option>javascript</option>
              <option>tally</option>
              <option>english</option>
              <option>Work</option>
              <option>Personal</option>
              <option>Education</option>
              <option>other</option>
            </select>

            <select
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            >
              <option>Select Type Of Student</option>
              {studentdata?.map((student, i) => {
                return (
                  <option key={i} value={student.Studentid}>
                    {student.StudentName}
                  </option>
                );
              })}
            </select>
            <input
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              type="text "
              placeholder="Write Your Name Here"
            />
            <button className="button1" onClick={HandleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherTaskCreate;
