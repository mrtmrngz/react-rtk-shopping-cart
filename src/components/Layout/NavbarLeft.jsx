import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="header-left">
      <Link to={`/`}>Logo</Link>
    </div>
  );
};

export default NavbarLeft;
