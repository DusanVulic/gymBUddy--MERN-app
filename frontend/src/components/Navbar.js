import React from "react";

import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const logoutHandler = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout body</h1>
        </Link>
        <nav>
          <div>
            <button onClick={logoutHandler}>logout</button>
          </div>
          <div>
            <Link to="/login">login</Link>
            <Link to="/signup">signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
