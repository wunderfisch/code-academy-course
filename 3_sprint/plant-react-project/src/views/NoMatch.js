import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NoMatch() {
  const goTo = useNavigate();
  // useNavigate is a pre-configured function
  const redirectTo = () => {
    goTo("/");
  };

  // useEffect calls the function automaticRed. when component is loaded, autom.Red. has a timeout that sends the user to
  const automaticRedirect = () => {
    setTimeout(() => {
      goTo("/");
    }, 5000);
  };
  useEffect(() => {
    automaticRedirect();
  }, []);

  return (
    <div>
      <p>Sorry, what you were looking for is not existing here</p>
      {/* This link as alternative to useNavigate-hook 
      <Link to="/">go back to the main page</Link>*/}
      <button onClick={redirectTo}>go back to main page</button>
      <p>You will be automaticly send to the main page in 5 seconds</p>
    </div>
  );
}

export default NoMatch;
