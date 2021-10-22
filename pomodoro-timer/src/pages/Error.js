import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="error-container">
        <h1>Oops! You've got lost</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
