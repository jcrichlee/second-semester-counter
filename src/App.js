import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import NotFoundPage from "./pages/404";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryTest from "./pages/ErrorBoundaryTest";
import Preloader from "./components/Preloader";
import "../src/assets/styles/index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="main">
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/test-error" element={<ErrorBoundary />} />
          <Route path="/error-boundary-test" element={<ErrorBoundaryTest />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;