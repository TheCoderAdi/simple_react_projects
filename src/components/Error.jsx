import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";
import { BiArrowBack } from "react-icons/bi";

const Error = () => {
  return (
    <div className="containerError">
      <h1>4</h1>
      <h1>0</h1>
      <h1>4</h1>
      <Link to="/">
        <button className="goHome">
          <BiArrowBack style={{ fontSize: "1.5rem" }} />
        </button>
      </Link>
    </div>
  );
};

export default Error;
