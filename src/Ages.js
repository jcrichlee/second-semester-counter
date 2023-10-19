import React from "react";

const Ages = () => {
  const genZ = (event) => {};
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
          <button onClick={genZ}>
            <a href="./test-error">AF. 99</a>
          </button>
      </div>
    </div>
  );
};

export default Ages;
