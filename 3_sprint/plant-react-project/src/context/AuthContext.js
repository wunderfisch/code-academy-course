import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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

  // fix problem that protected routes break when loading new because user is set null for first second
  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("userCredential :>> ", userCredential);
        const user = userCredential.user;
        setUser(user);
        // by setting to user, user is logged in automatically
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
        // could send error message to components/AuthContext.Provider and display text to user
        setUser(null);
      });
  };

  const checkUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("auth :>> ", auth);
        const uid = user.uid;
        console.log("user is logged in :>> ", user);
        setUser(user);
        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user is not logged in");
        setUser(null);
        setLoading(false);
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        console.log("logged you out");
      })
      .catch((error) => {
        // An error happened.
        console.log("problem with logout");
      });
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // make variables available
  return (
    <AuthContext.Provider
      value={{ user, setUser, register, login, logout, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
