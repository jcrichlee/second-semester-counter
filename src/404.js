import React from "react";

function NotFoundPage() {
  return [
    <section className="not-found-page">
      <h1 className="not-found">Oh no! - 404 Error</h1>,
      <p className="body-text">We can't find the page you're looking for 😪.</p>
      ,
      <a href="./">
        <button className="not-found-btn">Take me home</button>
      </a>
      ,
    </section>,
  ];
}

export default NotFoundPage;
