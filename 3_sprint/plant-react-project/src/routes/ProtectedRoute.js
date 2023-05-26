import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// this component should know if a user is logged in or not and with this dis/allow routes
function ProtectedRoute(props) {
  // connect to Authcontext
  const { user, loading } = useContext(AuthContext);

  // check if user is logged in
  const isAuth = user !== null ? true : false;

  return (
    /* if Auth is true render props.children, if not go to login */
    <>
      {/* check if loading is true, if not check if user is logged in */}
      {loading ? (
        <p>...still loading...</p>
      ) : isAuth ? (
        props.children
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default ProtectedRoute;
