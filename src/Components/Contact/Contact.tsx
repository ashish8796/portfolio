import React from "react";
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <ContactBox id="contacts">
      <h2>Contact Me</h2>

      <Main imgUrl={"./assets/images/Contact/map-color-overlay.png"}>
        <section>
          <AddressBox>
            <Icon>
              <FontAwesomeIcon icon={faHome} />
            </Icon>

            <ContextBox>
              <h4>Address</h4>
              <p>Sambhal, Uttar Pradesh, India</p>
            </ContextBox>
          </AddressBox>

          <MailBox>
            <Icon>
              <FontAwesomeIcon icon={faEnvelope} />
            </Icon>

            <ContextBox>
              <h4>Email</h4>
              <p>ashishsaini.ak@gmail.com</p>
            </ContextBox>
          </MailBox>

          <PhoneBox>
            <Icon>
              <FontAwesomeIcon icon={faPhone} />
            </Icon>

            <ContextBox>
              <h4>Phone</h4>
              <p>+91 8218055803</p>
            </ContextBox>
          </PhoneBox>
        </section>
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
  padding: 1.5rem 0;

  h2 {
    font-size: 2rem;
    width: 85%;
    margin: auto;
    padding: 1rem 0 1.5rem;
  }
`;

const Main = styled.main`
  background-image: url(${({ imgUrl }: MainProps) => imgUrl});
  background-size: contain;
  width: 85%;
  margin: auto;

  & > section {
    /* border: 1px solid #fff; */
    width: fit-content;
  }
`;

const Icon = styled.div`
  border: 1px solid aqua;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`;

const ContactTypeBox = styled.div`
  display: flex;
  margin: 0 0 1.5rem;
  background-color: #2020267b;
  padding: 20px 40px;
  border-radius: 5px;
  box-shadow: -1rem 0 3rem #000;
`;

const ContextBox = styled.div`
  h4 {
    font-size: 1.5rem;
    padding: 0 0 2rem;
    font-family: "Concert One", cursive;
  }
`;

const AddressBox = styled(ContactTypeBox)`
  & > div:first-child {
  }
`;

const MailBox = styled(ContactTypeBox)``;
const PhoneBox = styled(ContactTypeBox)``;
const MediaHouse = styled(ContactTypeBox)``;
