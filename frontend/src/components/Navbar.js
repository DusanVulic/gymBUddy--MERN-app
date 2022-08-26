import React from "react";

import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
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
            <button onClick={handleLogout}>logout</button>
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
