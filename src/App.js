import "./App.css";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncreamentOne = (event) => {
    event.preventDefault();
    if (counter + 1 >= 99999999) setCounter(99999999);
    else setCounter((prev) => prev + 1);
  };

  const handleDecreamentOne = (event) => {
    event.preventDefault();
    if (counter - 1 <= 0) setCounter(0);
    else setCounter((prev) => prev - 1);
  };

  const handleIncreamentTen = (event) => {
    event.preventDefault();
    if (counter + 10 >= 99999999) setCounter(99999999);
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
    <ErrorBoundary fallback="There was an error. Press F5 to refresh">
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
            &#129027;
          </button>
          <button className="action-button one" onClick={handleIncreamentOne}>
            &#129025;
          </button>
          <button className="action-button ten" onClick={handleIncreamentTen}>
            &#8648;
          </button>
          <button className="action-button clear" onClick={handleClear}>
            &#10227;
          </button>
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default App;
