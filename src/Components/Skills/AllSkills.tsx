import React from "react";
import styled from "styled-components";
import skills from "./../../utils/skill.json";

export default function AllSkills() {
  return (
    <SkillsBox>
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
  height: 80vh;

  h2 {
    font-size: 2rem;
    width: 80%;
    margin: 2rem auto;
    font-weight: bold;
    color: #494949;
    font-family: "Gothic A1", sans-serif;
  }
`;

const AllSkillsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 80%;
  margin: auto;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Alatsi", sans-serif;
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
`;

const SkillName = styled.div`
  margin: 5px 0 2rem;
`;
