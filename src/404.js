import React from "react";

const NotFoundPage = () => {
  return [
    <section className="not-found-page">
      <h1 className="not-found">Oh no! - Page not found</h1>
      <p className="body-text">We can't find the page you're looking for 😪.</p>
      <a href="./" className="not-found-btn-container">
        <button className="not-found-btn">Take me home</button>
      </a>
    </section>,
  ];
}

export default NotFoundPage;
