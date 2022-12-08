import React, { useState } from "react";
import "./Project_Styles/counter.css";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClear,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Counter = () => {
  const [count, setCount] = useState(0);
  const addBtn = () => setCount(count + 1);
  const subBtn = () => (count > 0 ? setCount(count - 1) : count);
  const clrBtn = () => setCount(0);
  return (
    <div className="counter-app">
      <div className="counter-controller">
        <h1>{count}</h1>
        <button className="addBtn" onClick={addBtn}>
          <AiOutlinePlusCircle />
        </button>
        <button className="subBtn" onClick={subBtn}>
          <AiOutlineMinusCircle />
        </button>
        <button className="clrBtn" onClick={clrBtn}>
          <AiOutlineClear />
        </button>
      </div>
      <div className="goToPage">
        <Link to="/projects">
          <button className="goBtn">
            <BiArrowBack style={{ fontSize: "1.5rem" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Counter;
