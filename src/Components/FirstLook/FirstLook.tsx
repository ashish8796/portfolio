import React from "react";
import styled from "styled-components";

function FirstLook() {
  return (
    <FirstLookWrapper id="home">
      <Details url={`./assets/images/background-2.jpg`}>
        <Overlay></Overlay>

        <InfoBox>
          <div>
            <GreetDiv>Hello, I am</GreetDiv>

            <NameHeading>Ashish Kumar Saini</NameHeading>
            <SkillBox>Full Stack Developer</SkillBox>

            <ContactBox>
              <ATag href="https://twitter.com/its___ashish" target="_blank">
                <TwitterIcon
                  src={"./assets/svgs/twitterIcon.svg"}
                  alt="Twitter Icon"
                />
              </ATag>

              <ATag
                href="https://www.linkedin.com/in/ashish-kumar-saini-developer/"
                target="_blank"
              >
                <LinkedInIcon
                  src={"./assets/svgs/linkedinIcon.svg"}
                  alt="Linkedin Icon"
                />
              </ATag>

              <ATag href="https://github.com/ashish8796" target="_blank">
                <GithubIcon
                  src={"./assets/svgs/githubIcon.svg"}
                  alt="Github Icon"
                />
              </ATag>
            </ContactBox>
          </div>
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
  background-color: #f4f4f4;

  @media only screen and (max-width: 680px) {
    height: 50vh;
  }

  @media only screen and (max-width: 480px) {
    height: 35vh;
  }

  @media only screen and (max-width: 320px) {
    height: 30vh;
  }
`;

const ATag = styled.a`
  margin: 0 10px;
  width: 35px;
`;

const Details = styled.div`
  background-image: url(${(props: FirstLookProps) => props.url});
  width: 100%;
  height: 65vh;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 680px) {
    height: 45vh;
    background-position: cover;
  }

  @media only screen and (max-width: 480) {
    height: 35vh;
  }

  @media only screen and (max-width: 320px) {
    height: 32vh;
  }
`;

const Overlay = styled.div`
  width: 100%;
  position: absolute;
  /* border: 1px solid; */
  height: 65vh;
  background-color: #00000061;

  @media only screen and (max-width: 680px) {
    height: 45vh;
  }

  @media only screen and (max-width: 480px) {
    height: 35vh;
  }

  @media only screen and (max-width: 320px) {
    height: 32vh;
  }
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

  @media only screen and (max-width: 568px) {
    font-size: 1rem;
    margin: 4rem 0 10px;
  }
`;

const NameHeading = styled.h2`
  font-size: 3.5rem;
  font-family: "Fredoka One", cursive;

  @media only screen and (max-width: 680px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 568px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const SkillBox = styled.p`
  font-family: "Gloria Hallelujah", cursive;
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: bold;

  @media only screen and (max-width: 568px) {
    font-size: 1rem;
  }
`;

const ContactBox = styled.div`
  margin-top: 2.5rem;
  /* border: 1px solid red; */
  height: 40px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 568px) {
    margin-top: 1.5rem;
  }
`;

const ImgTag = styled.img`
  width: 30px;
  transition: 0.15s;

  &:hover {
    width: 35px;
    transition: 0.15s;
  }
`;

const TwitterIcon = styled(ImgTag)``;

const LinkedInIcon = styled(ImgTag)``;

const GithubIcon = styled(ImgTag)``;

export default FirstLook;
