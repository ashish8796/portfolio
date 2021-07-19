import React from "react";
import styled from "styled-components";
import allProjects from "../../utils/projects.json";
import ProjectInfo, { IProject } from "./ProjectInfo";

export default function Projects() {
  let projects: Array<IProject> = allProjects;

  return (
    <Main>
      <h2>Things I've Built</h2>

      <ProjectBox>
        {projects.map((project) => (
          <ProjectInfo project={project} key={project.id} />
        ))}
      </ProjectBox>
    </Main>
  );
}

const Main = styled.div`
  h2 {
    width: 80%;
    margin: 1.5rem auto;
    font-size: 2rem;
    font-family: "Gothic A1", sans-serif;
    font-weight: bold;
    color: #494949;
  }
`;

const ProjectBox = styled.div``;
