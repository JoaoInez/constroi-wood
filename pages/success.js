import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { LongArrowAltLeft } from "styled-icons/fa-solid/LongArrowAltLeft";
import { H, P } from "../components/ui";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;

const Card = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  background-color: ${({ theme }) => theme.white};
  padding: 20px;
  max-width: 400px;
`;

const Title = styled(H)`
  margin: 0 0 10px 0;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  margin-top: 20px;

  ${P} {
    font-size: 0.9rem;
  }
`;

const LeftArrowIcon = styled(LongArrowAltLeft)`
  height: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.green};
`;

const success = () => {
  return (
    <Container>
      <Card>
        <Title h={4} color="black" bold>
          Obrigado!
        </Title>
        <P>
          A sua mensagem foi enviada. Entraremos em contacto consigo brevemente.
        </P>
        <Link href="/" as="/">
          <A>
            <LeftArrowIcon />
            <P bold color="green">
              Voltar para o nosso site
            </P>
          </A>
        </Link>
      </Card>
    </Container>
  );
};

export default success;
