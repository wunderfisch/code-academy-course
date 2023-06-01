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

  const inputHandler = (event) => {
    setInputInitialUserName(event.target.value);
  };

  const inputHandlerPW = (event) => {
    setInputInitialUserPW(event.target.value);
  };

  // Problems here:
  // only "Email is valid" is displayed shortly after click
  // not valid is never displayed
  // also possible login alert is shown without @ although no login
  const handleRegisterClick = () => {
    const emailValidator = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]/;
    if (emailValidator.test(inputInitialUserName)) {
      setDisplayValid("Email is valid");
      register(inputInitialUserName, inputInitialUserPW);
    } else if (
      !emailValidator.test(inputInitialUserName)
      // && emailValidator === ""
    ) {
      setDisplayValid("Email is not valid");
    } else {
      setDisplayValid("");
    }
    // console.log("inputUserInitialName :>> ", inputInitialUserName);
    // console.log("inputUserInitialPW :>> ", inputInitialUserPW);
    // register(inputInitialUserName, inputInitialUserPW);
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
    <div>
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
