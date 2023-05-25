import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../config/firebaseConfig";

// 1. creating the context and importing
export const AuthContext = createContext();

// 2. defining what we will be sharing
// is a function that receives props (where from?) and returns sth (what?) + access to all children of props
export const AuthContextProvider = (props) => {
  // console.log("props in context :>> ", props);
  // put everything that shall be shared
  // user state shall be initially null
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("userCredential :>> ", userCredential);
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage :>> ", errorMessage);
        setUser(null);
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(" login user :>> ", user);
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage :>> ", errorMessage);
        setUser(null);
      });
  };

  // make user available
  return (
    <AuthContext.Provider value={{ user, setUser, register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
