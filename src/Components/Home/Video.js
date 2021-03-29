import React from "react";
import styled from "styled-components";
import CenterTitle from "./CenterTitle";
import BackgroundVideos from "videos/video.mp4";

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

const Video = () => {
  return (
    <VideoContainer>
      <VideosBox src={BackgroundVideos} autoPlay muted loop type="video/mp4" />
      <CenterTitle />
    </VideoContainer>
  );
};

export default Video;
