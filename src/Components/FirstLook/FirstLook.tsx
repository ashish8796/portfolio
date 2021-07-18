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
          <GreetDiv>Hello,</GreetDiv>
          <NameHeading>Ashish Kumar Saini</NameHeading>
          <SkillBox></SkillBox>
        </InfoBox>

        <ContactBox></ContactBox>
      </Details>
    </FirstLookWrapper>
  );
}

interface FirstLookProps {
  url: string;
}

const FirstLookWrapper = styled.div`
  padding-top: 5rem;
`;

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
  border: 1px solid;
  height: 65vh;
  background-color: #00000059;
`;

const InfoBox = styled.div`
  position: absolute;
  z-index: 100;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GreetDiv = styled.div``;
const NameHeading = styled.h2``;

const SkillBox = styled.p``;
const ContactBox = styled.div``;

export default FirstLook;
