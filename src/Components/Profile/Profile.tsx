import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <ProfileBox>
      <div>
        <PicBox>
          <img src={"/assets/images/newResumeImg.jpeg"} alt="Ashish" />
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

  & > div {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: center;
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
  /* border: 1px solid; */
`;

const NameBox = styled.p`
  font-size: 3rem;
  color: #494949;
  margin-bottom: 20px;
`;

const InfoBox = styled.p`
  line-height: 20px;
  color: #686767;
  font-family: "Gothic A1", sans-serif;
`;
