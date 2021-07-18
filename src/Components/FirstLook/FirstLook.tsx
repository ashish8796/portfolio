import React from "react";
import styled from "styled-components";

function FirstLook() {
  return (
    <FirstLookWrapper>
      <Details
        url={`${require("./../../assets/images/background-2.jpg").default}`}
      >
        <Overlay></Overlay>

        <InfoBox>
          <div>
            <GreetDiv>Hello, I am</GreetDiv>

            <NameHeading>Ashish Kumar Saini</NameHeading>
            <SkillBox>Full Stack Developer</SkillBox>
          </div>

          <ContactBox>
            <ATag href="https://twitter.com/its___ashish" target="_blank">
              <TwitterIcon
                src={require("./../../assets/svgs/twitterIcon.svg").default}
                alt="Twitter Icon"
              />
            </ATag>

            <ATag
              href="https://www.linkedin.com/in/ashish-kumar-saini-developer/"
              target="_blank"
            >
              <LinkedInIcon
                src={require("./../../assets/svgs/linkedinIcon.svg").default}
                alt="Linkedin Icon"
              />
            </ATag>

            <ATag href="https://github.com/ashish8796" target="_blank">
              <GithubIcon
                src={require("./../../assets/svgs/githubIcon.svg").default}
                alt="Github Icon"
              />
            </ATag>
          </ContactBox>
        </InfoBox>
      </Details>
    </FirstLookWrapper>
  );
}

interface FirstLookProps {
  url: string;
}

const FirstLookWrapper = styled.div`
  padding-top: 5rem;
  height: 70vh;
`;

const ATag = styled.a``;

const Details = styled.div`
  background-image: url(${(props: FirstLookProps) => props.url});
  position: absolute;
  width: 100%;
  height: 65vh;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Overlay = styled.div`
  width: 100%;
  position: absolute;
  /* border: 1px solid; */
  height: 65vh;
  background-color: #00000061;
`;

const InfoBox = styled.div`
  position: absolute;
  z-index: 100;
  color: #fff;
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const GreetDiv = styled.div`
  font-family: "Gloria Hallelujah", cursive;
  /* border: 1px solid red; */
  font-size: 1.5rem;
  margin: 4rem 0 20px;
  font-weight: bold;
`;

const NameHeading = styled.h2`
  font-size: 3.5rem;
  font-family: "Fredoka One", cursive;
`;

const SkillBox = styled.p`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: bold;
`;

const ContactBox = styled.div`
  margin-top: 2.5rem;
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
`;

const ImgTag = styled.img`
  width: 25px;
`;

const TwitterIcon = styled(ImgTag)``;
const LinkedInIcon = styled(ImgTag)``;
const GithubIcon = styled(ImgTag)``;

export default FirstLook;
