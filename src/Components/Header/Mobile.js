import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  opacity: 0.8;
`;

const MobileList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const MobileLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  &:hover {
    color: white;
    background-color: black;
    border-top: 1px solid
      ${(props) => (props.current ? "white" : "transparent")};
  }
`;

const Mobile = () => {
  return (
    <MobileContainer>
      <MobileList>
        <MobileLink to="/" current={true}>
          Home
        </MobileLink>
        <MobileLink to="/search">Search</MobileLink>
        <MobileLink to="/products">Products</MobileLink>
        <MobileLink current={true} to="/signup">
          Sign up
        </MobileLink>
      </MobileList>
    </MobileContainer>
  );
};

export default Mobile;
