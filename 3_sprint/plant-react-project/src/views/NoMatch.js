import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <p>Sorry, what you were looking for is not existing here</p>
      <Link to="/">go back to the main page</Link>
    </div>
  );
}

export default NoMatch;
