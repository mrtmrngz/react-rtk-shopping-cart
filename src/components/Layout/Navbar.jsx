import { Link, useLocation } from "react-router-dom";
import Container from "../UI/Container";
import "./Navbar.scss";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";
import NavbarCenter from "./NavbarCenter";
import NavbarMobile from "./NavbarMobile";
import OffCanvas from "../UI/OffCanvas/OffCanvas";
import NavbarResponsive from "./NavbarResponsive";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isResponsive, setIsResponsive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsResponsive(false)
  }, [location])

  return (
    <header className="header">
      <Container>
        <div className="header-wrapper">
          <NavbarMobile onOpen={() => setIsResponsive(true)} />
          <NavbarLeft />
          <NavbarCenter />
          <NavbarRight />

          {isResponsive && <NavbarResponsive onClose={() => setIsResponsive(false)} />}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
