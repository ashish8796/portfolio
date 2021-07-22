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
        </DetailsBox>
      </div>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  /* border: 1px solid red; */
  /* margin-top: 12rem; */
  padding: 3rem 0 0;
  background-color: #f4f4f4;

  & > div {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: center;
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
  flex-basis: 35%;
  padding: 20px 0;
  /* border: 1px solid blue; */
  /* border-radius: 50%; */

  img {
    margin-left: 2rem;
    width: 90%;
    object-fit: contain;
    border-radius: 1%;
    overflow: hidden;
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
  }
  /* border: 1px solid; */
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
`;
