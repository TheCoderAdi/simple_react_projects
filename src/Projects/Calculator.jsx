import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Project_Styles/calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1)); // Or -1
  };
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  const changeCalcu = () => {};
  return (
    <div className="calculatorPage">
      <div className="containerCalculator">
        <form>
          <input
            className="inputCalcu"
            type="text"
            value={result}
            onChange={changeCalcu}
            placeholder="0"
          />
        </form>

        <div className="keypad">
          <button className="btnC highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="btnC highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="btnC highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button className="btnC" name="7" onClick={handleClick}>
            7
          </button>
          <button className="btnC" name="8" onClick={handleClick}>
            8
          </button>
          <button className="btnC" name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight btnC" name="*" onClick={handleClick}>
            &times;
          </button>
          <button className="btnC" name="4" onClick={handleClick}>
            4
          </button>
          <button className="btnC" name="5" onClick={handleClick}>
            5
          </button>
          <button className="btnC" name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight btnC" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button className="btnC" name="1" onClick={handleClick}>
            1
          </button>
          <button className="btnC" name="2" onClick={handleClick}>
            2
          </button>
          <button className="btnC" name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight btnC" name="+" onClick={handleClick}>
            +
          </button>
          <button className="btnC" name="0" onClick={handleClick}>
            0
          </button>
          <button className="btnC" name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight btnC" onClick={calculate} id="result">
            =
          </button>
        </div>
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

export default Calculator;
