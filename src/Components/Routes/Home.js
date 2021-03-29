import React from "react";
import BackgroundVideos from "videos/video.mp4";
import styled from "styled-components";
import CenterTitle from "Components/CenterTitle";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideosBox = styled.video`
  object-fit: cover;
  -o-object-fit: cover;
  background-color: #232a34;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Home = () => {
  return (
    <Container>
      <VideoContainer>
        <VideosBox
          src={BackgroundVideos}
          autoPlay
          muted
          loop
          type="video/mp4"
        />
        <CenterTitle />
      </VideoContainer>
      <div>hello</div>
    </Container>
  );
};

export default Home;
