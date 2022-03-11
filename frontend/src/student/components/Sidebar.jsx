import React from "react";
import styled from "styled-components";
import { RiContactsBook2Fill } from "react-icons/ri";
import { SiGooglemeet } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { AiFillProject, AiFillIdcard } from "react-icons/ai";
import Profiles from "./Profiles";
import AvatarImage4 from "../../assets/avatarImage4.jpg";
import { darkThemeColor } from "../utils/index.js";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage4} />
        <Name>Vivek Verma</Name>
        <Profiles content="Profile" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiContactsBook2Fill />
            <h3>Attendance</h3>
          </Link>
          <Link>
            <AiFillProject />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Results</h3>
          </Link>
          <Link>
            <SiGooglemeet />
            <h3>Online Meets</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #0f4d92;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 70%;
`;

const Link = styled.li`
  margin-left: 1%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 400;
    font-size: 1.2rem;
  }
  svg {
    font-size: 1.3rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 90%;
  background-color: #0f4d92;
  color: #c4c4c4;
  height: 18%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
