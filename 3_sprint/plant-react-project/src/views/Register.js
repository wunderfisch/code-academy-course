import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  // const { user, setUser } = useContext(AuthContext);
  const [inputInitialUserName, setInputInitialUserName] = useState("");
  const [inputInitialUserPW, setInputInitialUserPW] = useState("");

  const inputHandler = (event) => {
    setInputInitialUserName(event.target.value);
  };

  const inputHandlerPW = (event) => {
    setInputInitialUserPW(event.target.value);
  };

  const becomeInitialUser = () => {
    console.log("inputUserInitialName :>> ", inputInitialUserName);
    console.log("inputUserInitialPW :>> ", inputInitialUserPW);
  };

  return (
    <div>
      <h1>Register new Account</h1>
      <div>
        <label for="initialUsername">Username: </label>
        <input
          type="text"
          id="initialUsername"
          value={inputInitialUserName}
          onChange={inputHandler}
        />
        <label for="initialUserpw">Password: </label>
        <input
          type="text"
          id="initialUserpw"
          value={inputInitialUserPW}
          onChange={inputHandlerPW}
        />
        <button onClick={becomeInitialUser}>Register Account</button>
      </div>
      <div>
        Already have an account?
        <Link to="/login">Go to login.</Link>
      </div>
    </div>
  );
}

export default Register;
