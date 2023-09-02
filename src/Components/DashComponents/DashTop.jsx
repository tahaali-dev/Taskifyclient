import React, { useEffect, useState } from "react";
import "./Dash.css";
import quotes from "../data.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useQuery, useQueryClient } from "react-query";
import { SearchTasks } from "../../ReduxSlices/studentData";
import { GetCompletedTasks } from "../../Utils/Api";

const DashTop = () => {
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

  const dataname = useSelector((state) => state.reducer.user);

  //Card data Fectch
  const token = useSelector((state) => state.reducer.user.token);

  //Run Query To Fetch Data
  const { isLoading, isSuccess, data, isError } = useQuery("comptasks", () =>
    GetCompletedTasks(token)
  );

  const tasknumber = data?.length;


   //reFetch On Refresh
   const queryClient = useQueryClient();
   const handleRefresh = () => {
     queryClient.invalidateQueries("comptasks");
   };
 
   useEffect(() => {
     handleRefresh();
   }, []);
 

  return (
    <div className="dash-top">
      <div className="dash-1 ">
        <div className="dash-1-left dash">
          <h2>{dataname.user.name}</h2>
        </div>

        <div className="dash-1-right dash">
          <h2>{newQuote.quote}</h2>
          <p>{newQuote.author}</p>
        </div>
      </div>

      <div className="dash-2">
        <div className="dash-2-left dash">
          <h2>Your Task 📝 Journey = {tasknumber} </h2>
        </div>

        <div className="dash-2-right dash">
          <Link to="/create-new" className="linkd">
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashTop;
