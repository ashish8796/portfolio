import React, { useEffect, useRef } from "react";
import styled, { CSSProperties } from "styled-components";
import { NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";

interface LinksProps {}

export default function Links() {
  const link = useRef<HTMLElement>();

  useEffect(() => {}, [link]);

  return (
    <Nav>
      <LeftSection>
        <NameLink href="#profile">
          <span>ASHISH</span>
          <span>KUAMR SAINI</span>
        </NameLink>
      </LeftSection>

      <RightSection>
        <Scrollspy
          items={["home", "projects", "profile", "skills", "contacts"]}
          currentClassName="active"
          onUpdate={(item) => {
            // let elem = document.querySelector(".active");
            // let aTag = elem?.children[0] as HTMLElement;
            // console.log(aTag);
            // if (aTag !== undefined) {
            //   if (link.current) {
            //     link?.current?.setAttribute("style", "color: #000");
            //   }
            //   link.current = aTag;
            //   aTag.setAttribute("style", "color: aqua");
            // }
            // console.log(item);
          }}
          style={scrollspyStyle}
        >
          <li>
            <A href="#home">HOME</A>
          </li>
          <li>
            <A href="#projects">PROJECTS</A>
          </li>
          <li>
            <A href="#profile">PROFILE</A>
          </li>
          <li>
            <A href="#skills">SKILLS</A>
          </li>
          <li>
            <A href="#contacts">CONTACT</A>
          </li>
        </Scrollspy>
      </RightSection>
    </Nav>
  );
}

const scrollspyStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  // border: "1px solid red",
};

const Nav = styled.nav`
  height: 2rem;
  background-color: #edffec;
  display: flex;
  box-shadow: 1px 1px 9px 0px #8a8a8a;
  /* border: 1px solid red; */
  justify-content: space-between;
  padding: 1.5em 2em;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const ATag = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-family: "Fredoka One", cursive;
  color: #000000;
`;

const NameLink = styled(ATag)`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  font-family: "Fredoka One", cursive;
  color: #0a81ab;
  width: fit-content;

  span {
    margin: 0;
  }

  span:last-child {
    font-size: 16px;
    margin-top: 5px;
    color: #000000;
    /* border: 1px solid black; */
  }
`;

const A = styled(ATag)`
  font-size: 14px;
`;

const LeftSection = styled.section`
  /* border: 1px solid green; */
  flex-basis: 50%;
  padding-left: 5rem;
`;

const RightSection = styled.section`
  /* border: 1px solid blue; */
  flex-basis: 50%;
`;
