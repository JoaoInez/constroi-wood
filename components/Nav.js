import React from "react";
import styled from "styled-components";
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

const Nav = () => (
  <Navbar>
    <Container>
      <Col>
        <H color="black" h={3}>
          ConstroiWood
        </H>
      </Col>
    </Container>
  </Navbar>
);

export default Nav;
