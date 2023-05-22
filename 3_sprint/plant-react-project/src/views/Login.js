import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    setUser({ name: "Someone" });
    setTimeout(() => {
      goTo("/");
    }, 2000);
  };
  const logout = () => {
    setUser(null);
    setTimeout(() => {
      goTo("/");
    }, 2000);
  };

  // redirect user after login
  const goTo = useNavigate();

  return (
    <div>
      <h1>Login or Logout</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Login;
