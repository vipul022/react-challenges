import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pokemon/search">
          <li> FInd your favourite Pokemon</li>
        </Link>
      </ul>
    </div>
  );
};
export default Nav;
