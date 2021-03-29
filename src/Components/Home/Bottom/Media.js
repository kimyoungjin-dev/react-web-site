import React from "react";
import styled from "styled-components";

const MediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Box = styled.div`
  margin-right: 70px;
  height: 80%;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const Value = styled.div`
  color: white;
  font-size: 18px;
  margin-top: 20px;
`;

const Media = () => {
  return (
    <MediaContainer>
      <Box>
        <Name>About Us</Name>

        <Value>How it works</Value>
        <Value>Testimonials</Value>
        <Value>Careers</Value>
        <Value>Investors</Value>
        <Value>Terms of Service</Value>
      </Box>
      <Box>
        <Name>Contact Us</Name>

        <Value>Contact</Value>
        <Value>Suppert</Value>
        <Value>Destinations</Value>
        <Value>Sponsorships</Value>
      </Box>
      <Box>
        <Name>Videos</Name>

        <Value>Submit Video</Value>
        <Value>Ambassadors</Value>
        <Value>Agency</Value>
        <Value>Influencer</Value>
      </Box>
      <Box>
        <Name>Social Media</Name>
        <Value>Instagram</Value>
        <Value>Facebook</Value>
        <Value>Youtube</Value>
        <Value>Twitter</Value>
      </Box>
    </MediaContainer>
  );
};

export default Media;
