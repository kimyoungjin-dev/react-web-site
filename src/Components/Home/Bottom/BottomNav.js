import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebook,
  faTypo3,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomNavList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const BottomNavLeft = styled.div`
  display: flex;
  font-size: 30px;
  color: white;
`;

const BottomNavCenter = styled.div`
  color: white;
  font-size: 24px;
`;

const BottomNavRight = styled.div`
  display: flex;
  color: white;
  width: 13%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

const BottomNav = () => {
  return (
    <Container>
      <BottomNavList>
        <Link to="/">
          <BottomNavLeft>
            <span>TRVL</span>
            <FontAwesomeIcon icon={faTypo3} />
          </BottomNavLeft>
        </Link>

        <BottomNavCenter>
          TRVL
          <span style={{ marginLeft: 10, marginRight: 10 }}>&copy;</span>
          {new Date().getFullYear()}
        </BottomNavCenter>

        <BottomNavRight>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faTwitter} />
        </BottomNavRight>
      </BottomNavList>
    </Container>
  );
};

export default BottomNav;
