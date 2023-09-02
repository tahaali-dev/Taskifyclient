import React, { useState } from "react";
import "./Note.css";

const NoteModal = () => {
  const [classname, setclass] = useState("dark-back");

  return (
    <div className={classname}>
      <div className="note-cont">
        <h2>Note</h2>
        <p>If You Are Using Only For Test Purpose Use This Keys.</p>
        <p>Email = test1@gmail.com</p>
        <p>Password= test123</p>
        <p>Email = test00@gmail.com</p>
        <p>Password= test000</p>
        <h3>Hope You Like This WebApp</h3>

        <button className="modalbtn" onClick={() => setclass("hide")}>Close</button>
      </div>
    </div>
  );
};

export default NoteModal;
