import React from "react";
import styled from "styled-components";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { Row, Col } from "../components/Grid";
import { H } from "../components/Typography";

const Navbar = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 2px 8px #f0f1f2;
  z-index: 1;
`;

const Container = styled(Row)`
  background-color: ${({ theme }) => theme.white};
  padding: 0 20px;
`;

const HammerIcon = styled(Hammer)`
  width: 20px;
  color: ${({ theme }) => theme.white};
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const Nav = () => (
  <Navbar>
    <Container>
      <Col flex align="center">
        <Logo>
          <HammerIcon />
        </Logo>
        <H color="black" h={3}>
          ConstroiWood
        </H>
      </Col>
    </Container>
  </Navbar>
);

export default Nav;
