import "./App.css";
import React from "react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 999999999999999) {
      setInputValue(newValue);
      setCounter(newValue);
    } else {
      setInputValue("");
    }
  };

  const handleInputClick = () => {
    setInputValue("");
  };

  const handleIncreamentOne = (event) => {
    event.preventDefault();
    if (counter + 1 >= 999999999999999) setCounter(999999999999999);
    else setCounter((prev) => prev + 1);
  };

  const handleDecreamentOne = (event) => {
    event.preventDefault();
    if (counter - 1 <= 0) setCounter(0);
    else setCounter((prev) => prev - 1);
  };

  const handleIncreamentTen = (event) => {
    event.preventDefault();
    if (counter + 10 >= 999999999999999) setCounter(999999999999999);
    else setCounter((prev) => prev + 10);
  };

  const handleDecreamentTen = (event) => {
    event.preventDefault();
    if (counter - 10 <= 0) setCounter(0);
    else setCounter((prev) => prev - 10);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setCounter(0);
  };
  

  return (
    <section className="counter-container">
        <NumericFormat
          className="counter-label"
          value={counter}
          displayType={"text"}
          thousandSeparator={true}
          thousandsGroupStyle="thousand"
        />
      <div className="button-container">
        <button className="action-button ten" onClick={handleDecreamentTen}>
          &#8650;
        </button>
        <button className="action-button one" onClick={handleDecreamentOne}>
          &#11015;
        </button>
        <button className="action-button one" onClick={handleIncreamentOne}>
          &#11014;
        </button>
        <button className="action-button ten" onClick={handleIncreamentTen}>
          &#8648;
        </button>
        <button className="action-button clear" onClick={handleClear}>
          &#10227;
        </button>
      </div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleInputClick}
          className="input-field"
          placeholder="0"
        />
    </section>
  );
}

export default Counter;
