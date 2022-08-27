import React from "react";

import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();

  const { user } = useAuthContext();

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
          {user && (
            <div>
              <button onClick={logoutHandler}>logout</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">login</Link>
              <Link to="/signup">signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
