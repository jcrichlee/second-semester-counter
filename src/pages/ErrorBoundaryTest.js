import React from "react";
import AgeError from "../components/AgeError";
import ErrorBoundary from "../components/ErrorBoundary";

const ErrorBoundaryTest = () => {
  return [
    <div className="errorboundarytest">
      <ErrorBoundary>
        <AgeError ageRange="year-2000-above" />
      </ErrorBoundary>
    </div>,
  ];
};

export default ErrorBoundaryTest;
