// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="container flex flex-row justify-between items-center py-4 px-4 text-white-100 md:px-0">
        <h2 className="text-xl font-semibold tracking-widest">Logo</h2>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create-job">Create Job</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
