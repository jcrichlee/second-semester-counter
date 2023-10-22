import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import NotFoundPage from "./404";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundaryTest from "./ErrorBoundaryTest";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/test-error" element={<ErrorBoundary />} />
        <Route path="/error-boundary-test" element={<ErrorBoundaryTest />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;