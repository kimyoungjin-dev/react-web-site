import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Media from "./Media";
import BottomNav from "./BottomNav";

const CommunityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 100%;
  background-color: rgb(53, 53, 53);
`;

const Contents = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Community = () => {
  return (
    <CommunityContainer>
      <Contents>
        <Form />
        <Media />
        <BottomNav />
      </Contents>
    </CommunityContainer>
  );
};

export default Community;
