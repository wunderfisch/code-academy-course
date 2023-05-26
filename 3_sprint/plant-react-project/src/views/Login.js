import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserPW, setInputUserPW] = useState("");

  const { login, logout } = useContext(AuthContext);

  const inputHandler = (event) => {
    setInputUserName(event.target.value);
    // check (probably) here + registration if email is fullfilling the norms
  };

  const inputHandlerPW = (event) => {
    setInputUserPW(event.target.value);
  };

  // const login = () => {
  //   setUser({ name: "Someone" });
  //   setTimeout(() => {
  //     goTo("/");
  //   }, 2000);
  // };
  const handleLogout = () => {
    logout();
    setTimeout(() => {
      goTo("/");
    }, 2000);
  };

  const handleUserClick = () => {
    // inputUserName = setUser;
    // console.log("inputUserName :>> ", inputUserName);
    // console.log("inputUserPW :>> ", inputUserPW);
    login(inputUserName, inputUserPW);
  };

  // redirect user after login
  const goTo = useNavigate();

  return (
    <div>
      <h1>Login or Logout</h1>
      <div>
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          value={inputUserName}
          onChange={inputHandler}
        />
        <label for="userpw">Password: </label>
        <input
          type="text"
          id="userpw"
          value={inputUserPW}
          onChange={inputHandlerPW}
        />
        <button onClick={handleUserClick}>login</button>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          ""
          // <button onClick={login}>Login</button>
        )}
      </div>
      <div>
        Do not have an account yet?
        <Link to="/register">Go and register one.</Link>
      </div>
    </div>
  );
}

export default Login;
