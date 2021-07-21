import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactBox id="contacts">
      <h2>Contact Me</h2>

      <Main imgUrl={"./assets/images/Contact/map-color-overlay.png"}>
        <AddressBox>
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </AddressBox>
      </Main>
    </ContactBox>
  );
}

interface MainProps {
  imgUrl: string;
}

const ContactBox = styled.div`
  background-color: #272727;
  color: #fff;
  font-family: "Gothic A1", sans-serif;

  h2 {
    font-size: 2rem;
    width: 85%;
    margin: auto;
    padding: 1rem 0;
  }
`;

const Main = styled.main`
  background-image: url(${({ imgUrl }: MainProps) => imgUrl});
  height: 50vh;
  background-size: contain;
  width: 85%;
  margin: auto;
`;

const AddressBox = styled.div`
  & > div:first-child {
    border: 1px solid aqua;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const MailBox = styled.div``;
const PhoneBox = styled.div``;
const MediaHouse = styled.div``;
