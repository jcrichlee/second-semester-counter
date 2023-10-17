import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: "There is an error",
  };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
