import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import NotFoundPage from "./pages/404";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryTest from "./components/ErrorBoundaryTest";

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