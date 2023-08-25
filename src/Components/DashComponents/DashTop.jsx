import React, { useEffect, useState } from "react";
import "./Dash.css";
import quotes from "../data.js";
import { Link } from "react-router-dom";

const DashTop = () => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  useEffect(() => {
    const newRandomQuoteIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuoteIndex(newRandomQuoteIndex);
  }, [quotes]);

  let newQuote = quotes[randomQuoteIndex];

  console.log(newQuote);

  return (
    <div className="dash-top">
      <div className="dash-1 ">
        <div className="dash-1-left dash">
          <h2>Taha Ali</h2>
        </div>

        <div className="dash-1-right dash">
          <h2>{newQuote.quote}</h2>
          <p>{newQuote.author}</p>
        </div>
      </div>

      <div className="dash-2">
        <div className="dash-2-left dash">
          <h2>Your Task 📝 Journey = 100t</h2>
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
