import React, { useRef, useState } from "react";
import Link from "next/link";
import portfolio from "../../../data/portfolio.json";
import content from "../../../content/home.md";
import {
  H,
  P,
  Row,
  Col,
  Section,
  SectionImage,
  SectionContent,
  Divider
} from "../../ui";
import Card from "./ServiceCard";
import WideCard from "./ProjectCard";
import {
  ContactButton,
  ArrowDownIcon,
  Title,
  ServiceIconWrapper,
  HammerIcon,
  PaintRollerIcon,
  BathIcon,
  PortfolioButton,
  ArrowRightIcon,
  BottomAnchor
} from "./styles";

const Homepage = () => {
  const bottomRef = useRef();

  const scrollToContacts = () =>
    bottomRef.current.scrollIntoView({ behavior: "smooth" });

  const [contactBtn, setContactBtn] = useState("none");

  const [portfolioBtn, setPortfolioBtn] = useState("none");

  return (
    <>
      <Section height="calc(100vh - 73px)" bgColor="black" padding={0} relative>
        <SectionImage url="/static/kitchen.jpg" />
        <SectionContent margin>
          <Title color="white">Carpintaria, pinturas e remodelações</Title>
          <Divider width="100px" color="white" margin="0 0 30px 0" />
          <P color="white" align="center" width="600px">
            Oferecemos soluções para os vossos projectos de pequena e grande
            dimensão. Construímos o que o cliente idealiza.
          </P>
          <ContactButton
            color="white"
            size="lg"
            margin="30px 0 0 0"
            bgColor="blue"
            state={contactBtn}
            onClick={scrollToContacts}
            onMouseEnter={() => setContactBtn("hover")}
            onMouseLeave={() => setContactBtn("blur")}
          >
            <P color="white">Contactos</P>
            <ArrowDownIcon />
          </ContactButton>
        </SectionContent>
      </Section>
      <Section padding="20px 0 50px 0">
        <H>Serviços</H>
        <Divider width="33%" margin="0 0 30px 0" />
        <Row maxWidth="1000px">
          <Col flex justify="center">
            <Card>
              <ServiceIconWrapper>
                <HammerIcon />
              </ServiceIconWrapper>
              <H h={4} align="center">
                Carpintaria
              </H>
              <P align="center">Fornecimento e montagem</P>
              <P align="center">Pavimento flutuante</P>
              <P align="center">Cozinhas</P>
              <P align="center">Forras de tectos e paredes</P>
              <P align="center">Escadas e degraus em madeira</P>
            </Card>
          </Col>
          <Col flex justify="center">
            <Card>
              <ServiceIconWrapper>
                <PaintRollerIcon />
              </ServiceIconWrapper>
              <H h={4} align="center">
                Pinturas
              </H>
              <P align="center">
                Todo o tipo de serviço de pintura de construção civil
              </P>
              <P align="center">
                Pinturas internas/externas em moradias, apartamentos, e comércio
              </P>
              <P align="center">Lacagens e evernizamentos</P>
            </Card>
          </Col>
          <Col flex justify="center">
            <Card>
              <ServiceIconWrapper>
                <BathIcon />
              </ServiceIconWrapper>
              <H h={4} align="center">
                Remodelações
              </H>
              <P align="center">Remodelações e recuperação de imóveis</P>
              <P align="center">Reparações pontuais</P>
              <P align="center">
                Reabilitação e manutenção de edifícios e infra-estruturas
              </P>
            </Card>
          </Col>
        </Row>
      </Section>
      <Section height="200px" bgColor="black" padding={0} relative>
        <SectionImage url="/static/carpenter-stock.jpg" />
        <SectionContent margin>
          <P color="white" width="500px">
            <i>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </i>
          </P>
        </SectionContent>
      </Section>
      <Section padding="20px 0 50px 0">
        <H>Projectos em destaque</H>
        <Divider width="33%" margin="0 0 30px 0" />
        <WideCard
          image={portfolio.carpentry[0].images[0]}
          title={portfolio.carpentry[0].title}
          description={portfolio.carpentry[0].description}
        />
        <WideCard
          image={portfolio.painting[0].images[0]}
          title={portfolio.painting[0].title}
          description={portfolio.painting[0].description}
        />
        <Link href="/portfolio">
          <a>
            <PortfolioButton
              color="white"
              size="lg"
              bgColor="blue"
              state={portfolioBtn}
              onMouseEnter={() => setPortfolioBtn("hover")}
              onMouseLeave={() => setPortfolioBtn("blur")}
            >
              <P color="white">Portfolio</P>
              <ArrowRightIcon />
            </PortfolioButton>
          </a>
        </Link>
      </Section>
      <BottomAnchor ref={bottomRef} />
    </>
  );
};

export default Homepage;
