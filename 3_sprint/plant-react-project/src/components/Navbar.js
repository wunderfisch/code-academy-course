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
        <Link to="/login" className="navtab">
          Login
        </Link>{" "}
        {""}|{""}
        <Link to="/register" className="navtab">
          Register
        </Link>
        {""}|{""}
        <Link to="/favorites" className="navtab">
          Favorites
        </Link>
        {""}|{""}
        <Link to="/chat" className={user ? "navtab" : "onlylogin navtab"}>
          Members Chat
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
