import React from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

const NavBarRight = styled.div`
  width: 600px;
  height: 100%;
`;

const RightList = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SLink = styled(Link)`
  font-size: 20px;
`;

const Item = styled.span``;

const Button = styled.button`
  background-color: black;
  outline: none;
  padding: 10px 20px;
  color: white;
  border-radius: 3px;
  border: 1px solid white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transition: all 0.4s ease-in-out;
  }
`;

const IsShowMenu = withRouter(({ location: { pathname } }) => {
  return (
    <NavBarRight>
      <RightList>
        <SLink to="/">
          <Item>Home</Item>
        </SLink>
        <SLink to="search">
          <Item>search</Item>
        </SLink>
        <SLink to="products">
          <Item>products</Item>
        </SLink>
        <SLink to="signup">
          <Button>signup</Button>
        </SLink>
      </RightList>
    </NavBarRight>
  );
});

export default IsShowMenu;
