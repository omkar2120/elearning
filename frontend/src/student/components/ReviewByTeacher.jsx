import React from "react";
import styled from "styled-components";
import AvatarImage4 from "../../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";
import Profiles from "./Profiles";

function ReviewByTeacher() {
  return (
    <TeacherReview>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage4} alt="" />
            </Avatar>
            <Info>
              <InfoName>Vivek</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Profiles content="Feedback" />
        </Detail>
        <Title>Regarding assignments</Title>
        <ProjectInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </ProjectInfo>
      </CardContent>
    </TeacherReview>
  );
}

const TeacherReview = styled.div`
  border-radius: 1rem;
  height: 160%;
  margin-top: -5px;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h4`
  font-weight: 500;
`;
const InfoUpdate = styled.h6`
  font-weight: 400;
`;
const Title = styled.h5`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
export default ReviewByTeacher;
