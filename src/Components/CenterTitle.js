import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsList = styled.div`
  color: white;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const CenterSubTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 70px;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
`;

const TransparentButton = styled.button`
  outline: none;
  border: 1px solid white;
  font-weight: 600;
  background-color: transparent;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
`;

const WhiteButton = styled.button`
  border-radius: 3px;
  padding: 10px;
  outline: none;
  border: none;
  background-color: white;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const CenterTitle = () => {
  return (
    <Center>
      <ContentsList>
        <Title>ADVENTURE AWAITS</Title>
        <CenterSubTitle>What are you waiting for?</CenterSubTitle>

        <ButtonContainer>
          <TransparentButton>GET STARED</TransparentButton>
          <WhiteButton>
            <span style={{ marginRight: 5 }}>WATCH TRAILER</span>
            <FontAwesomeIcon icon={faPlayCircle} />
          </WhiteButton>
        </ButtonContainer>
      </ContentsList>
    </Center>
  );
};

export default CenterTitle;
