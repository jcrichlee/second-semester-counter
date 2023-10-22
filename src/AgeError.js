import React from "react";

function AgeError({ ageRange }) {
  if (ageRange === "year-2000-above") {
    throw new Error("GenZs crashed the counter App 😱");
  }
  return (
    <div>
        {ageRange}
    </div>
  );
}

export default AgeError;
