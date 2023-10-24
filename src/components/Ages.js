import React from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Ages = () => {
  const navigate = useNavigate();
  const genZ = (event) => {
    navigate("/error-boundary-test");
    console.error("GenZs crashed the counter App 😱");
  };
  const millenial = (event) => {
    event.preventDefault();
    alert("You're a Millenial");
  };
  const genX = (event) => {
    event.preventDefault();
    alert("You're a GenX");
  };

  return (
    <div className="all-ages">
      <h1>Testing ErrorBoundary</h1>
      <div className="ages">
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Before 1996"
          onClick={millenial}
        >
          BF. 96
        </button>
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="1996 to 1999"
          onClick={genX}
        >
          96 - 99
        </button>
        <button
          data-tooltip-id="my-tooltip"
          data-tooltip-content="After 1999"
          onClick={genZ}
        >
          AF. 99
        </button>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Ages;
