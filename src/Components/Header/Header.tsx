import React from "react";
import styled from "styled-components";
import Links from "./Links";

export default function Header() {
  return (
    <HeaderWrapper>
      <Links />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.main``;
