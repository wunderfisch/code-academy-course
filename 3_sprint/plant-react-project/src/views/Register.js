import { deleteUser, getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  const { user, setUser } = useContext(AuthContext);
  const [inputInitialUserName, setInputInitialUserName] = useState("");
  const [inputInitialUserPW, setInputInitialUserPW] = useState("");
  const [displayValid, setDisplayValid] = useState("");
  const [displayValidPW, setDisplayValidPW] = useState("");

  const inputHandler = (event) => {
    setInputInitialUserName(event.target.value);

    const emailValidator = /[\w]+@[\w]+\.[a-z]{2,3}$/;
    // const emailValidator = new RegExp("[w]+@[w]+.[a-z]{2}$");

    if (emailValidator.test(event.target.value)) {
      setDisplayValid("Email is valid");
      // set button true
    } else if (
      !emailValidator.test(event.target.value)
      // && emailValidator === ""
    ) {
      setDisplayValid("Email is not valid");
    } else {
      setDisplayValid("");
    }
  };

  const inputHandlerPW = (event) => {
    setInputInitialUserPW(event.target.value);
    const passwordValidator = /[\w]{6,}/;
    if (passwordValidator.test(event.target.value)) {
      setDisplayValidPW("Password valid");
    } else if (!passwordValidator.test(event.target.value)) {
      setDisplayValidPW("think of a better password");
    } else {
      setDisplayValidPW("");
    }
  };

  const handleRegisterClick = () => {
    // console.log("inputUserInitialName :>> ", inputInitialUserName);
    // console.log("inputUserInitialPW :>> ", inputInitialUserPW);
    register(inputInitialUserName, inputInitialUserPW);
  };

  const handleDeleteClick = () => {
    const auth = getAuth();
    const usertodelete = auth.currentUser;

    console.log("userToDelete :>> ", usertodelete);
    deleteUser(usertodelete)
      .then((info) => {
        // User deleted.
        // console.log("info :>> ", info);
        alert("Your account has been deleted.");
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log("error :>> ", error);
        alert("An error has happend during logout :-(");
      });
  };

  return (
    <div className="margin">
      {(() => {
        if (user) {
          return (
            <>
              <h3>Delete Account?</h3>
              <div>
                {" "}
                You are now logged-in as{" "}
                <span className="yourmail">{user.email}</span>
              </div>
              <button onClick={handleDeleteClick} className="headspace">
                delete my account forever
              </button>
            </>
          );
        } else {
          return (
            <>
              <h3>Register new Account</h3>
              <div>
                <label for="initialUsername">Email: </label>
                <input
                  type="email"
                  id="initialUsername"
                  // value to controll the state with value of input
                  value={inputInitialUserName}
                  onChange={inputHandler}
                />
                <label for="initialUserpw">
                  Password (min. 6 characters):{" "}
                </label>
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
              <div>{displayValid}</div>
              <div>{displayValidPW}</div>
              <div className="headspace">
                ...want to learn about good passwords? Go to{" "}
                <a href="https://datadetoxkit.org/en/security/passwords/">
                  tactical tech
                </a>{" "}
              </div>
              <div className="headspace">
                Already have an account? <Link to="/login">Go to login.</Link>
              </div>
            </>
          );
        }
      })()}
    </div>
  );
}

export default Register;
