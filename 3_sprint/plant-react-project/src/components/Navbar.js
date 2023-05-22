import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
      </nav>
    </div>
  );
}

export default Navbar;
