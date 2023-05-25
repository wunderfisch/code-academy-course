import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  // const { user, setUser } = useContext(AuthContext);
  const [inputInitialUserName, setInputInitialUserName] = useState("");
  const [inputInitialUserPW, setInputInitialUserPW] = useState("");

  const inputHandler = (event) => {
    setInputInitialUserName(event.target.value);
  };

  const inputHandlerPW = (event) => {
    setInputInitialUserPW(event.target.value);
  };

  const handleRegisterClick = () => {
    // console.log("inputUserInitialName :>> ", inputInitialUserName);
    // console.log("inputUserInitialPW :>> ", inputInitialUserPW);
    register(inputInitialUserName, inputInitialUserPW);
  };

  return (
    <div>
      <h1>Register new Account</h1>
      <div>
        <label for="initialUsername">Email: </label>
        <input
          type="email"
          id="initialUsername"
          // value to controll the state with value of input
          value={inputInitialUserName}
          onChange={inputHandler}
        />
        <label for="initialUserpw">Password (min. 6 characters): </label>
        <input
          type="password"
          id="initialUserPW"
          value={inputInitialUserPW}
          onChange={inputHandlerPW}
          minLength="6"
          required
        />
        <button onClick={handleRegisterClick}>Register Account</button>
      </div>
      <div>
        Already have an account?
        <Link to="/login">Go to login.</Link>
      </div>
    </div>
  );
}

export default Register;
