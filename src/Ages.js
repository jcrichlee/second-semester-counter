import React from "react";
import { useNavigate } from "react-router-dom";

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
        <button onClick={millenial}>BF. 96</button>
        <button onClick={genX}>96 - 99</button>
        <button onClick={genZ}>AF. 99</button>
      </div>
    </div>
  );
};

export default Ages;
