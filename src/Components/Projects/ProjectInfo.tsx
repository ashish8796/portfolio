import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export interface IProject {
  id: number;
  name: string;
  description: string;
  tech_stack: Array<string>;
  links: Array<string>;
  img: string;
}

export interface IProjectInfoProps {
  project: IProject;
}

export default function ProjectInfo({ project }: IProjectInfoProps) {
  const { name, description, tech_stack, links, img } = project;

  let [githubLink, demoLink] = links;

  const handleOnClick = () => {
    window.open(demoLink);
  };

  return (
    <ProjectWrapper id="projects">
      <main>
        <LeftSection onClick={handleOnClick}>
          <img src={img} alt={name} />
        </LeftSection>

        <RightSection>
          <h3>{name}</h3>

          <Description>{description}</Description>

          <TechStack>
            {tech_stack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </TechStack>

          <Links>
            <GithubIcon>
              <ATag href={githubLink} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </ATag>
            </GithubIcon>

            <DemoIcon>
              <ATag href={demoLink} target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </ATag>
            </DemoIcon>
          </Links>
        </RightSection>
      </main>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  margin: 20px 0 3rem;

  main {
    display: flex;
    padding: 30px;

    & > section {
      border-radius: 3px;
    }
  }
`;

const LeftSection = styled.section`
  flex-basis: 55%;
  box-shadow: 1px 1px 8px 0px #bbbbbb;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 3px;
  }
`;

const RightSection = styled.section`
  flex-basis: 45%;
  text-align: right;
  margin-left: 3rem;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  color: #494949;
  box-shadow: 1px 1px 5px 0px #d2d1d1;
  padding: 0 1rem;

  h3 {
    font-size: 1.8rem;
    margin: 1.5rem 0 2rem;
    color: #494949;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 18px;
`;

const TechStack = styled.p`
  margin: 10px 0;
  padding-top: 2rem;
`;

const ATag = styled.a`
  cursor: pointer;
  color: #4b4b4b;
  text-decoration: none;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;

  & > div:first-child {
    margin-right: 20px;
  }
`;

const GithubIcon = styled.div``;
const DemoIcon = styled.div``;
