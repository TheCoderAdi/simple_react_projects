import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Project_Styles/clock.css";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="clockContainer">
      <div className="allBoxClock">{currentTime}</div>
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

export default Clock;
