import React from "react";
import styled from "styled-components";

interface LinksProps {}

export default function Links() {
  return (
    <Nav>
      <LeftSection>
        <NameLink>
          <span>ASHISH</span>
          <span>KUAMR SAINI</span>
        </NameLink>
      </LeftSection>

      <RightSection>
        <A href="#home">HOME</A>
        <A href="#projects">PROJECTS</A>
        <A href="#contacts">CONTACT</A>
      </RightSection>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 2rem;
  background-color: #fff;
  display: flex;
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
  flex-basis: 60%;
  padding-left: 5rem;
`;

const RightSection = styled.section`
  /* border: 1px solid blue; */
  flex-basis: 40%;
  display: flex;
  justify-content: space-evenly;
`;
