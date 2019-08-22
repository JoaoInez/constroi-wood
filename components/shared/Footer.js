import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { At } from "styled-icons/boxicons-regular/At";
import { Phone } from "styled-icons/boxicons-regular/Phone";
import { P, Row, Col } from "../ui";

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  padding: 10px 20px;
  box-shadow: 0px -1px 4px ${({ theme }) => theme.darkGrey};
`;

const Info = styled.div`
  display: flex;
  margin: 15px 0;
`;

const AtIcon = styled(At)`
  width: 25px;
  margin-right: 10px;
`;

const PhoneIcon = styled(Phone)`
  width: 25px;
  margin-right: 10px;
`;

const HammerIcon = styled(Hammer)`
  width: 30px;
  color: ${({ theme }) => theme.darkGrey};
`;

const Logo = styled.div`
  border: 2.5px solid ${({ theme }) => theme.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 15px 0;

    ${P} {
      transition: all 0.15s ease-in-out;
    }

    &:hover ${P} {
      color: ${({ theme }) => theme.darkGrey};
    }
  }
`;

const Footer = () => (
  <SFooter>
    <Row maxWidth="1000px" margin="0 auto">
      <Col sm={0} md={0} lg={3} flex align="center">
        <Logo>
          <HammerIcon />
        </Logo>
      </Col>
      <Col sm={1} md={10} lg={10} flex column justify="center">
        <Info>
          <AtIcon />
          <P color="white">woodconstroi@gmail.com</P>
        </Info>
        <Info>
          <PhoneIcon />
          <P color="white">+351 912 345 678</P>
        </Info>
      </Col>
      <Col sm={1} md={10} lg={10}>
        <Nav>
          <Link href="/">
            <a>
              <P color="white">Home</P>
            </a>
          </Link>
          <Link href="/portfolio">
            <a>
              <P color="white">Portfolio</P>
            </a>
          </Link>
        </Nav>
      </Col>
    </Row>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email" />
      <input type="text" name="about" placeholder="about" />
      <textarea name="message" placeholder="message" />
      <button type="submit">Send</button>
    </form>
  </SFooter>
);

export default Footer;
