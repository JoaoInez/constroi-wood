import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { Row, Col, H } from "../ui";

const Navbar = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  z-index: 1;
`;

const Container = styled(Row)`
  background-color: ${({ theme }) => theme.white};
  padding: 0 20px;
`;

const HammerIcon = styled(Hammer)`
  width: 20px;
  color: ${({ theme }) => theme.blue};
`;

const Logo = styled.div`
  border: 2.5px solid ${({ theme }) => theme.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  transition: all 0.15s ease-in-out;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${Logo} {
      background-color: ${({ theme }) => theme.blue};
    }

    ${HammerIcon} {
      color: ${({ theme }) => theme.white};
    }
  }
`;

const Nav = () => (
  <Navbar>
    <Container>
      <Col flex>
        <Link href="/">
          <LogoLink>
            <Logo>
              <HammerIcon />
            </Logo>
            <H color="black" h={3}>
              ConstroiWood
            </H>
          </LogoLink>
        </Link>
      </Col>
    </Container>
  </Navbar>
);

export default Nav;