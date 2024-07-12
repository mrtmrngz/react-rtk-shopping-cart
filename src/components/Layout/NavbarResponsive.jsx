import React from "react";
import OffCanvas from "../UI/OffCanvas/OffCanvas";
import NavbarCenter from "./NavbarCenter";

const NavbarResponsive = ({onClose}) => {
  return (
    <OffCanvas onClose={onClose} className="left">
      <NavbarCenter className={`responsive`} />
    </OffCanvas>
  )
};

export default NavbarResponsive;
