import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <nav className="navigation">
        <Link to="/" className="navtab">
          Home
        </Link>{" "}
        {""}|{""}
        <Link to="/favorites" className={user ? "navtab" : "onlylogin navtab"}>
          Favorites
        </Link>
        {""}|{""}
        <Link to="/chat" className={user ? "navtab" : "onlylogin navtab"}>
          Members Chat
        </Link>
        {""}|{""}
        <Link to="/login" className="navtab">
          {user ? "Logout" : "Login"}
        </Link>{" "}
        {""}|{""}
        <Link to="/register" className="navtab">
          {user ? "Delete Account" : "Register"}
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
