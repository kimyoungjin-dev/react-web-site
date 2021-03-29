import React from "react";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const LogoTitle = styled.span`
  font-size: 40px;
  margin-right: 10px;
`;

const HeaderLeft = () => {
  return (
    <NavBarLeft>
      <Link to="/">
        <LogoTitle>TRVL</LogoTitle>
      </Link>
      <FontAwesomeIcon icon={faTypo3} style={{ fontSize: 30 }} />
    </NavBarLeft>
  );
};

export default HeaderLeft;
