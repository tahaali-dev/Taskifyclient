import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quotes from "../../data.js";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { GetStudents } from "../../../Utils/TeacherApi.js";
// ----------------------imports-----------------------

const TeacDashTop = () => {
  //Quote Generator----------------
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );
  useEffect(() => {
    const newRandomQuoteIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuoteIndex(newRandomQuoteIndex);
  }, [quotes]);
  let newQuote = quotes[randomQuoteIndex];
  //--------------------------

  //Token
  const token = useSelector((state) => state.reducer.teacherdata.token);

  //Query For getStudents
  const { isLoading, data, isSuccess } = useQuery("getStudents", () =>
    GetStudents(token)
  );

  //Name Fetch
  const teachername = useSelector(
    (state) => state.reducer.teacherdata.user.name
  );

  return (
    <div>
      {" "}
      <div className="dash-top">
        <div className="dash-1 ">
          <div className="dash-1-left dash">
            <h2>{teachername}</h2>
          </div>

          <div className="dash-1-right dash">
            <h2>{newQuote.quote}</h2>
            <p>{newQuote.author}</p>
          </div>
        </div>

        <div className="dash-2">
          <div className="dash-2-left dash">
            <h2>Make Task For Students</h2>
          </div>

          <div className="dash-2-right dash">
            <Link to="/teachertaskcreation" className="linkd">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacDashTop;

// {tasknumber}
