import React, { useState } from "react";
import "./Project_Styles/accordion.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Accordion = () => {
  const [show, setShow] = useState(null);

  const showThings = (e) => {
    if (show === e) {
      return setShow(null);
    }
    setShow(e);
  };
  const question = [
    {
      id: 1,
      title: "What is Reactjs ?",
      answer:
        "React is a front-end and open-source JavaScript library which is useful in devloping UI.",
    },
    {
      id: 2,
      title: "What is the full form of JS ?",
      answer: "JavaScript",
    },
    {
      id: 3,
      title: "What is the fullform of HTML ?",
      answer: "Hyper Text MarkUp Language",
    },
    {
      id: 4,
      title: "What is the fullform of CSS ?",
      answer: "Cascading Style Sheets",
    },
  ];
  return (
    <div className="accordionContainer">
      <div className="main-accordion">
        {question.map((qNA, index) => (
          <div key={qNA.id}>
            <div className="heroWidth">
              <div className="aQuestion">
                <p>{qNA.title}</p>
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => showThings(index)}
                >
                  {show === index ? (
                    <AiOutlineMinusCircle
                      style={{
                        color: "red",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <AiOutlinePlusCircle
                      style={{
                        color: "green",
                        fontSize: "2rem",
                        cursor: "pointer",
                      }}
                    />
                  )}
                </button>
              </div>
              <p className={index === show ? "p-width show" : "hide"}>
                {qNA.answer}
              </p>
            </div>
          </div>
        ))}
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

export default Accordion;
