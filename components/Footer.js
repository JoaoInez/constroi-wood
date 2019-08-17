import React from "react";
import styled from "styled-components";
import { At } from "styled-icons/boxicons-regular/At";
import { Phone } from "styled-icons/boxicons-regular/Phone";
import { P } from "./Typography";

const SFooter = styled.footer`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  padding: 10px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Info = styled.div`
  display: flex;
  margin: 15px 0;
  align-items: flex-start;
`;

const AtIcon = styled(At)`
  width: 25px;
  margin-right: 10px;
`;

const PhoneIcon = styled(Phone)`
  width: 25px;
  margin-right: 10px;
`;

const Footer = () => (
  <SFooter>
    <Content>
      <Info>
        <AtIcon />
        <P color="white">woodconstroi@gmail.com</P>
      </Info>
      <Info>
        <PhoneIcon />
        <P color="white">+351 912 345 678</P>
      </Info>
    </Content>
  </SFooter>
);

export default Footer;
