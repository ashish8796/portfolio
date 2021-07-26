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
    <ProjectWrapper>
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
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px;

    & > section {
      border-radius: 3px;
      height: 42vh;

      @media only screen and (max-width: 900px) {
        height: auto;
      }
    }

    @media only screen and (max-width: 768px) {
    }

    @media only screen and (max-width: 680px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    @media only screen and (max-width: 568px) {
    }

    @media only screen and (max-width: 480px) {
    }

    @media only screen and (max-width: 320px) {
    }
  }
`;

const LeftSection = styled.section`
  flex-basis: 50%;
  cursor: pointer;
  transition: 0.3s;
  /* box-shadow: 1px 1px 8px 0px #bbbbbb; */

  &:hover {
    box-shadow: 1px 1px 5px 4px #d0d0d0;
    transition: 0.3s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 3px;
  }

  @media only screen and (max-width: 680px) {
  }

  @media only screen and (max-width: 568px) {
  }

  @media only screen and (max-width: 480px) {
  }

  @media only screen and (max-width: 320px) {
  }
`;

const RightSection = styled.section`
  text-align: right;
  margin-left: 3rem;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  color: #494949;
  /* box-shadow: 1px 1px 5px 0px #d2d1d1; */
  padding: 0 1rem;
  transition: 0.1s;

  &:hover {
    box-shadow: 1px 1px 5px 4px #d0d0d0;
    transition: 0.1s;
  }

  h3 {
    font-size: 1.8rem;
    margin: 1.5rem 0 2rem;
    color: #494949;

    @media only screen and (max-width: 800px) {
      font-size: 1.2rem;
    }

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      margin: 1rem 0;

      & + p {
        font-size: 13px;
        line-height: 16px;
      }
    }

    @media only screen and (max-width: 568px) {
    }

    @media only screen and (max-width: 480px) {
    }

    @media only screen and (max-width: 320px) {
    }
  }

  @media only screen and (max-width: 680px) {
    margin-left: 0;
    margin: 1rem 0 0;
    box-shadow: 1px 1px 8px 0px #bbbbbb;
    text-align: left;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 18px;
`;

const TechStack = styled.p`
  margin: 1rem 0 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: 14px;
  color: #6d6d6d;
  font-family: "Alatsi", sans-serif;

  span {
    margin: 5px;

    @media only screen and (max-width: 768px) {
      margin: 2px 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0.3rem 0;
  }
  @media only screen and (max-width: 680px) {
    justify-content: flex-start;
  }
`;

const ATag = styled.a`
  cursor: pointer;
  color: #4b4b4b;
  text-decoration: none;
  font-size: 25px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    font-size: 30px;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
  margin-bottom: 5px;
  /* border: 1px solid black; */
  height: 30px;

  & > div:first-child {
    margin-right: 20px;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const Icon = styled.div`
  /* border: 1px solid black; */
  width: 30px;
`;

const GithubIcon = styled(Icon)``;

const DemoIcon = styled(Icon)``;
