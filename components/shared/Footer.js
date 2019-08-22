import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { At } from "styled-icons/boxicons-regular/At";
import { Phone } from "styled-icons/boxicons-regular/Phone";
import { P, Row, Col, Button, H } from "../ui";

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  padding: 20px 20px;
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

// const HammerIcon = styled(Hammer)`
//   width: 30px;
//   color: ${({ theme }) => theme.darkGrey};
// `;

// const Logo = styled.div`
//   border: 2.5px solid ${({ theme }) => theme.darkGrey};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   margin-right: 10px;
// `;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

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

const FormTitle = styled(H)`
  margin: 0 0 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 300px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.darkGrey};
  font-size: 1em;
  margin-bottom: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.white};
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.darkGrey};
  resize: vertical;
  font-size: 1rem;
  margin-bottom: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.white};
`;

const Footer = () => (
  <SFooter>
    <Row maxWidth="1000px" margin="0 auto">
      <Col flex column>
        <Info>
          <AtIcon />
          <P color="white">woodconstroi@gmail.com</P>
        </Info>
        <Info>
          <PhoneIcon />
          <P color="white">+351 912 345 678</P>
        </Info>
      </Col>
      <Col>
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
      <Col md={2} lg={2}>
        <FormTitle h={3} color="white">
          Contacte-nos
        </FormTitle>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="form-name" value="contact" />
          <Input type="text" name="name" placeholder="Nome" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="text" name="about" placeholder="Assunto" />
          <TextArea name="message" placeholder="Mensagem" rows="4" />
          <Button bgColor="green" type="submit">
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  </SFooter>
);

export default Footer;
