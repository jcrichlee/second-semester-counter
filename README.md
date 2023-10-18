# Second Semeter Examination - Counter App - Readme Documentaion

Welcome to my second semester exam React application! This readme provides an overview of the different pages and components within my application. It also provides instructions for running the application locally.

## Table of Contents
- [Pages](#pages)
  - [Counter Page](#counter-page)
  - [Not Found Page](#not-found-page)
- [Components](#components)
  - [Error Boundary](#error-boundary)
- [Getting Started](#getting-started)
- [Additional Notes](#additional-notes)

## Pages

### 1. **Counter Page**

The Counter Page features a numeric counter with various interactive buttons for incrementing and decrementing the displayed number. The counter value is formatted with thousands separators for easy readability.

#### Usage

- **Increment by One:** Click the "single up arrow" button to increase the counter by 1.
- **Decrement by One:** Click the "single down arrow" button to decrease the counter by 1.
- **Increment by Ten:** Click the "double up arrow" button to increase the counter by 10.
- **Decrement by Ten:** Click the "double down arrow" button to decrease the counter by 10.
- **Clear Counter:** Click the "refresh" button to reset the counter to 0.

#### Code Snippet

```jsx
import { useState } from "react";
import { NumericFormat } from "react-number-format";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreamentOne = (event) => {
    event.preventDefault();
    if (counter + 1 >= 999999999999999) setCounter(999999999999999);
    else setCounter((prev) => prev + 1);
  };

  const handleDecreamentOne = (event) => {
    event.preventDefault();
    if (counter - 1 <= 0) setCounter(0);
    else setCounter((prev) => prev - 1);
  };

  const handleIncreamentTen = (event) => {
    event.preventDefault();
    if (counter + 10 >= 999999999999999) setCounter(999999999999999);
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
  );
}
```

### 2. **Not Found Page**

The Not Found Page is displayed when a user tries to access a non-existent page. It provides a friendly error message and a button to navigate back to the home page.

#### Usage

- **Return Home:** Click the "Take me home" button to navigate back to the home page.

#### Code Snippet

```jsx
function NotFoundPage() {
  return [
    <section className="not-found-page">
      <h1 className="not-found">Oh no! - 404 Error</h1>,
      <p className="body-text">We can't find the page you're looking for 😪.</p>
      ,
      <button className="not-found-btn">
        <a href="./">Take me home</a>
      </button>
      ,
    </section>,
  ];
}
```

## Components

### 1. **Error Boundary**

The Error Boundary component is used to catch JavaScript errors anywhere in a component tree and log those errors, and display a fallback UI in case of an error.

#### Usage

- Wrap components with `<ErrorBoundary>` to catch and handle errors gracefully.

#### Code Snippet

```jsx
class ErrorBoundary extends React.Component {
  state = {
    hasError: true,
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
      return <h1 className="test-error">{this.state.errorMessage}</h1>;
    }
    return this.props.children;
  }
}
```

## Getting Started

1. **Prerequisites:**
   - Make sure you have Node.js and npm installed.
  
2. **Installation:**
   ```bash
   npm install
   ```

3. **Running the Application:**
   ```bash
   npm start
   ```

   This command will start the development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Additional Notes

- This application uses React for building the user interface components.
- Error boundaries are implemented using the `<ErrorBoundary>` component to handle unexpected errors gracefully.
- The counter component is designed with interactive buttons and formatted numeric display for a user-friendly experience.

Feel free to explore the code, modify components, and customize the application according to your requirements. Happy coding! 🚀