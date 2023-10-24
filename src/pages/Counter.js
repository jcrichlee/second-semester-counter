import "../App.css";
import React from "react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import Ages from "../components/Ages";

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
        data-tooltip-content={counter}
        data-tooltip-id="my-tooltip"
      />
      <div className="button-container">
        <button
          className="action-button ten"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Decrease by 10"
          onClick={handleDecreamentTen}
        >
          &#8650;
        </button>
        <button
          className="action-button one"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Decrease by 1"
          onClick={handleDecreamentOne}
        >
          &#11015;
        </button>
        <button
          className="action-button one"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Increase by 1"
          onClick={handleIncreamentOne}
        >
          &#11014;
        </button>
        <button
          className="action-button ten"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Increase by 10"
          onClick={handleIncreamentTen}
        >
          &#8648;
        </button>
        <button
          className="action-button clear"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Clear counter"
          onClick={handleClear}
        >
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
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Enter a number manually"
      />
      <div>
        <Ages />
      </div>
      <footer className="footer">
        <a href="./updates">✨ Check out next Semester's Questions ✨</a>
        <p className="footer-text">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/jcrichlee"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-content={"JCRichLee on GitHub"}
            data-tooltip-id="my-tooltip"
          >
            {"JCRichLee"}
          </a>
        </p>
      </footer>
    </section>
  );
}

export default Counter;
