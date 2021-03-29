import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import Mobile from "./Mobile";
import IsNotShowMenu from "./IsNotShowMenu";
import IsShowMenu from "./IsShowMenu";

const Container = styled.div`
  background-color: black;
  height: 80px;
  width: 100%;
  color: white;
`;

const NavBar = styled.div`
  height: 100%;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = withRouter(({ location: { pathname } }) => {
  const [showMenu, setShowMenu] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [click, setClick] = useState(true);

  const onShowMenu = () => {
    if (window.innerWidth < 600) {
      setShowMenu(false);
      setClick(true);
    } else {
      setShowMenu(true);
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    onShowMenu();
    return () => {
      window.removeEventListener("resize", onShowMenu);
    };
  }, []);

  window.addEventListener("resize", onShowMenu);
  return (
    <Container>
      <NavBar>
        <HeaderLeft />
        {showMenu ? (
          <IsShowMenu />
        ) : (
          <IsNotShowMenu
            setClick={setClick}
            setMobileMenu={setMobileMenu}
            click={click}
          />
        )}
      </NavBar>
      {mobileMenu && <Mobile />}
    </Container>
  );
});

export default Header;
