import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <ProfileBox>
      <PicBox></PicBox>
      <DetailsBox></DetailsBox>
    </ProfileBox>
  );
}

const ProfileBox = styled.div``;
const PicBox = styled.section``;
const DetailsBox = styled.section``;
const NameBox = styled.p``;
const InfoBox = styled.p``;
