import React from "react";
import TeacDashTop from "../DashTop/TeacDashTop";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { GetDoutes } from "../../../Utils/TeacherApi";
import Loader from "../../Loader/Loader";
import "./TeacherDash.css";
import { format } from "date-fns";

const TeacherDash = () => {
  //Token
  const token = useSelector((state) => state.reducer.teacherdata.token);

  //Query For getStudents
  const { isLoading, data, isSuccess } = useQuery("getdoubtes", () =>
    GetDoutes(token)
  );

  return (
    <div className="w-full">
      <div className="w-85 Dash ">
        <TeacDashTop />

        <div className="card-container">
          {isLoading ? (
            <Loader />
          ) : (
            data.map((item,i) => {
              return (
                <div className="card" key={i}>
                  <div className="title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="desccard teacherdesc">{item.description}</div>
                  <div className="bottom-teacher">
                  <h5>{format(new Date(item.date), "dd/MM/yyyy")}</h5>
                  <h5> {item.createdBy}</h5>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDash;
