import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="d-flex align-items-center">
          <span class="navbar-toggler-icon"></span>
        </div>
        <div className="container-fluid ">
          <div className="d-flex">
            <Link to="/" className="navbar-brand">
              Notes
            </Link>
            <Link to="/task1" className="navbar-brand">
              Task 1
            </Link>
            <Link to="/post-data" className="navbar-brand">
              Task 3
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
