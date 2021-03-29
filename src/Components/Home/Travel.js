import React from "react";
import styled from "styled-components";

const TravelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TravelContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TravelTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 60px 0px;
`;

const TopGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-column-gap: 20px;
`;

const Box = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const BottomGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-column-gap: 20px;
`;

const Travel = () => {
  return (
    <TravelContainer>
      <TravelContents>
        <TravelTitle>Check out these EPIC Destinations!</TravelTitle>
        <TopGridBox>
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1428572184420-7d1092d8c6c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
              }
            />
            <Text>
              Explore the hidden waterfall deep inside the Amazon Jungle
            </Text>
          </Box>

          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlbGFuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              }
            />
            <Text>Travel throught the Islands of Bali in a Private Cruise</Text>
          </Box>
        </TopGridBox>
        <BottomGridBox>
          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b2NlYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              }
            />
            <Text>Set Sail in the Atlantic Ocean Visiting Unchared Waters</Text>
          </Box>

          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1584395631446-e41b0fc3f68d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWxheWFzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              }
            />
            <Text>ExPerience Football on Top of the Himilayan Mountains</Text>
          </Box>

          <Box>
            <Image
              src={
                "https://images.unsplash.com/photo-1594478277825-11f41a17122a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FoYXJhJTIwZGVzZXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              }
            />
            <Text>Ride throught the Sahara Desert on a gruided camel tour</Text>
          </Box>
        </BottomGridBox>
      </TravelContents>
    </TravelContainer>
  );
};

export default Travel;
