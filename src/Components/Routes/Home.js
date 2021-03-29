import React from "react";
import styled from "styled-components";
import Video from "Components/Home/Video";
import Travel from "Components/Home/Travel";
import Community from "Components/Home/Bottom/Community";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Video />
      <Travel />
      <Community />
    </Container>
  );
};

export default Home;
