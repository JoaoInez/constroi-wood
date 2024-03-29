import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Hammer } from "@styled-icons/fa-solid/Hammer";
import { At } from "@styled-icons/boxicons-regular/At";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { P, Row, Col, Button, H, Divider } from "../ui";

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

const HammerIcon = styled(Hammer)`
  width: 30px;
  color: ${({ theme }) => theme.lightGrey};
`;

const Logo = styled.div`
  border: 2.5px solid ${({ theme }) => theme.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 0 20px 25px 0;
`;

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
      @media ${({ theme: { media } }) => media.laptop},
        ${({ theme: { media } }) => media.desktop} {
        color: ${({ theme }) => theme.darkGrey};
      }
    }
  }
`;

const FormTitle = styled(H)`
  margin: 0 0 20px 0;
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
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

const Footer = () => (
  <SFooter>
    <Row maxWidth="1000px" margin="0 auto">
      <Col>
        <Row margin="0 0 20px 0">
          <Col flex column>
            <Info>
              <AtIcon />
              <P color="white">woodconstroi@gmail.com</P>
            </Info>
            <Info>
              <PhoneIcon />
              <div>
                <P color="white">+351 926 794 607</P>
                <P color="white">Chamada para a rede móvel nacional</P>
              </div>
            </Info>
          </Col>
        </Row>
        <Row margin="0 0 20px 0">
          <Col>
            <Nav>
              <Link href="/" as="/">
                <a>
                  <P color="white">Home</P>
                </a>
              </Link>
              <Link href="/portfolio" as="/portfolio">
                <a>
                  <P color="white">Portfolio</P>
                </a>
              </Link>
            </Nav>
          </Col>
        </Row>
      </Col>
      <Col>
        <FormTitle h={3} color="white">
          Contacte-nos
        </FormTitle>
        <Form
          name="contacto"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact/success"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <Input type="text" name="nome" placeholder="Nome" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="text" name="assunto" placeholder="Assunto" />
          <TextArea name="mensagem" placeholder="Mensagem" rows="5" />
          <Button bgColor="green" type="submit">
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
    <Divider width="80%" margin="40px auto" />
    <Row maxWidth="1000px" margin="0 auto">
      <Col flex align="center" wrap>
        <Logo>
          <HammerIcon />
        </Logo>
        <P small color="lightGrey">
          &copy; ConstroiWood Lda. 2022. Todos os direitos reservados.
        </P>
      </Col>
    </Row>
  </SFooter>
);

export default Footer;
