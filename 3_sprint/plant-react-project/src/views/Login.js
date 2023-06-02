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
    alert("you are logged out");
    {
      goTo("/");
    }
  };

  const handleUserClick = () => {
    // inputUserName = setUser;
    // console.log("inputUserName :>> ", inputUserName);
    // console.log("inputUserPW :>> ", inputUserPW);

    login(inputUserName, inputUserPW);
    alert("you are logged in");
    setTimeout(() => {
      goTo("/");
    }, 2000);
  };

  // redirect user after login
  const goTo = useNavigate();

  return (
    <div className="margin">
      <h1>Login or Logout</h1>

      {(() => {
        if (!user) {
          return (
            <>
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
              </div>
              <div className="headspace">
                Do not have an account yet?{" "}
                <Link to="/register">Go and register one.</Link>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div>
                You are now logged-in as{" "}
                <span className="yourmail">{user.email}</span>
              </div>
              <div className="headspace">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </>
          );
        }
      })()}
    </div>
  );
}

export default Login;
