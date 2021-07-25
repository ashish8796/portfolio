import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <ProfileBox id="profile">
      <div>
        <PicBox>
          <img src={"./assets/images/newResumeImg.jpeg"} alt="Ashish" />
        </PicBox>

        <DetailsBox>
          <NameBox>Ashish Kumar Saini</NameBox>

          <InfoBox>
            Good at user-centric solutions. Collaborative, team player who is
            proficient in working with interdisciplinary teams and executing
            goal-oriented projects. Strongly interested in obtaining a Software
            Developer position to work on enhancing the product experience.
          </InfoBox>

          <ContactBox>
            <p>
              <a
                href="mailto:ashishsaini.ak@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>ashishsaini.ak@gmail.com</span>
              </a>
            </p>

            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 8218055803</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Uttar Pradesh, India</span>
            </p>
          </ContactBox>

          <SocialLinkBox>
            <ATag href="https://twitter.com/its___ashish" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </ATag>

            <ATag
              href="https://www.linkedin.com/in/ashish-kumar-saini-developer/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </ATag>

            <ATag href="https://github.com/ashish8796" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </ATag>
          </SocialLinkBox>
        </DetailsBox>
      </div>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  padding: 3rem 0 0;
  background-color: #f4f4f4;

  & > div {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    width: 80%;
    margin: auto;
    justify-content: center;

    @media only screen and (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 912px) {
    padding: 2.5rem 0 0;
  }

  @media only screen and (max-width: 800px) {
    padding: 2rem 0 0;
  }

  @media only screen and (max-width: 680px) {
    padding: 1.5rem 0 0;
  }
`;

const PicBox = styled.section`
  padding: 20px 0;

  img {
    margin-left: 2rem;
    width: 90%;
    object-fit: contain;
    border-radius: 1%;
    overflow: hidden;
  }

  @media only screen and (max-width: 680px) {
    width: 50%;
  }
`;

const DetailsBox = styled.section`
  flex: 1;
  margin-left: 3rem;
  padding: 2rem 1rem;
  font-family: sans-serif;

  @media only screen and (max-width: 912px) {
    flex-basis: 40%;
  }

  @media only screen and (max-width: 800px) {
    flex-basis: 50%;
  }

  @media only screen and (max-width: 680px) {
    flex-basis: 70%;
    margin-left: 0;
  }
`;

const NameBox = styled.p`
  font-size: 3rem;
  color: #494949;
  margin-bottom: 20px;

  @media only screen and (max-width: 912px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 680px) {
    font-size: 1.5rem;
  }
`;

const InfoBox = styled.p`
  line-height: 20px;
  color: #686767;
  font-family: "Gothic A1", sans-serif;

  @media only screen and (max-width: 680px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const ContactBox = styled.div`
  /* border: 1px solid blue; */
  padding: 0.8rem 0;

  p {
    /* border: 1px solid red; */
    margin: 10px 0;
    display: flex;
    align-items: center;
    color: #302f2f;

    a {
      text-decoration: none;
      color: #302f2f;
      /* color: black; */
      display: flex;
      align-items: center;
    }

    &:hover svg {
      color: #027777;
    }
  }

  svg {
    /* border: 1px solid yellow; */
    font-size: 25px;
    margin-right: 20px;
    color: #4c4c4c;
  }
`;

const SocialLinkBox = styled.div`
  /* border: 1px solid blue; */
  height: 28px;
  display: flex;
  align-items: center;
`;

const ATag = styled.a`
  width: 25px;
  display: inline-block;
  font-size: 20px;
  margin: 5px 15px 5px 0;
  transition: 0.1s;
  text-decoration: none;
  color: #4c4c4c;

  &:hover {
    font-size: 25px;
    transition: 0.1s;
  }
`;
