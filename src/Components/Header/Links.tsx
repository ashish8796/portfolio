import React from "react";
import styled from "styled-components";

interface LinksProps {}

export default function Links() {
  return (
    <Nav>
      <A href="#home">Home</A>
      <A href="#projects">Projects</A>
      <A href="#contacts">Contact</A>
    </Nav>
  );
}

const Nav = styled.nav``;
const A = styled.a``;
