import React from "react";
import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from "../utils";
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>5</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In Cohort</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>9</Digit>
            <InfoContainer>
              <Title>Total Subjects</Title>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin: 0 0.5rem -0.5rem 0.9rem;
`;
const Title = styled.h5`
  color: black;
`;
const SubTitle = styled.h6`
  color: #333333;
  font-weight: normal;
`;

export default Info;
