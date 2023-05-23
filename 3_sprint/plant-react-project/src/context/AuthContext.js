import { createContext, useState } from "react";

// 1. creating the context and importing
export const AuthContext = createContext();

// 2. defining what we will be sharing
// is a function that receives props (where from?) and returns sth (what?) + access to all children of props
export const AuthContextProvider = (props) => {
  console.log("props in context :>> ", props);
  // put everything that shall be shared
  // user state shall be initially null
  const [user, setUser] = useState(null);

  // make user available
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
