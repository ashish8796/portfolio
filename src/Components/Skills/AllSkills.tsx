import React from "react";
import styled, { keyframes } from "styled-components";
import skills from "./../../utils/skill.json";
import { tada, swing } from "react-animations";

export default function AllSkills() {
  return (
    <SkillsBox id="skills">
      <h2>Technical Skills</h2>

      <AllSkillsBox>
        {skills.map((skill) => (
          <div key={skill.name}>
            <SKillImgBox>
              <img src={skill.image} alt={skill.name} />
            </SKillImgBox>

            <SkillName>{skill.name}</SkillName>
          </div>
        ))}
      </AllSkillsBox>
    </SkillsBox>
  );
}

const SkillsBox = styled.main`
  margin: 1rem 0;
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    width: 80%;
    margin: 3rem auto;
    font-weight: bold;
    color: #494949;
    font-family: "Gothic A1", sans-serif;

    @media only screen and (max-width: 680px) {
      margin: 2rem auto;
      line-height: 2.5rem;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const AllSkillsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 80%;
  margin: auto;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Alatsi", sans-serif;
  }

  @media only screen and (max-width: 912px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: 800px) {
    /* grid-template-columns: repeat(5, 1fr); */
  }

  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SKillImgBox = styled.div`
  width: 60px;
  margin: 0 2rem;
  height: 65px;

  img {
    width: 100%;
    object-fit: contain;
    opacity: 0.8;
    transition: 0.5s;

    &:hover {
      opacity: 1;
      transition: 0.5s;
    }
  }

  @media only screen and (max-width: 912px) {
  }

  @media only screen and (max-width: 800px) {
    width: 60px;
    margin: 0 1rem;
    height: 60px;
  }

  @media only screen and (max-width: 680px) {
    width: 50px;
    margin: 0 1rem;
    height: 50px;
  }
`;

const SkillName = styled.div`
  margin: 5px 0 2rem;

  @media only screen and (max-width: 912px) {
  }

  @media only screen and (max-width: 800px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 12px;
    margin: 5px 0 1rem;
  }
`;
