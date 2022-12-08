import React from "react";
import { useState } from "react";
import "./Project_Styles/randomjoke.css";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const RandomJoke = () => {
  const url = "https://official-joke-api.appspot.com/jokes/programming/random";
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState(null);
  const generateJoke = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setJoke(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="randomContainer">
      <div className="boxRandom">
        <h1>Random Jokes</h1>
        <hr style={{ width: "100% " }} />
        {isLoading ? (
          <div className="lds-hourglass"></div>
        ) : (
          <div>
            {joke.map((jokes) => {
              return (
                <p key={jokes.id}>
                  <span style={{ fontFamily: "Roboto" }}>{jokes.setup}</span>
                  <span style={{ fontFamily: "Roboto" }}>
                    {jokes.punchline}
                  </span>
                </p>
              );
            })}
          </div>
        )}
        <button onClick={generateJoke}>Generate Joke</button>
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

export default RandomJoke;
