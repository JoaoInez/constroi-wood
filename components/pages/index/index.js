import React, { useRef, useState } from "react";
import Link from "next/link";
import * as R from "ramda";
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
          <Title color="white">
            {R.pathOr("", ["attributes", "main", "title"])(content)}
          </Title>
          <Divider width="100px" color="white" margin="0 0 30px 0" />
          <P color="white" align="center" width="600px">
            {R.pathOr("", ["attributes", "main", "description"])(content)}
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
              {R.pathOr([], ["attributes", "services", "carpentry"])(
                content
              ).map((service, i) => (
                <P align="center" key={i}>
                  {service}
                </P>
              ))}
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
              {R.pathOr([], ["attributes", "services", "painting"])(
                content
              ).map((service, i) => (
                <P align="center" key={i}>
                  {service}
                </P>
              ))}
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
              {R.pathOr([], ["attributes", "services", "remodeling"])(
                content
              ).map((service, i) => (
                <P align="center" key={i}>
                  {service}
                </P>
              ))}
            </Card>
          </Col>
        </Row>
      </Section>
      <Section height="200px" bgColor="black" padding={0} relative>
        <SectionImage url="/static/carpenter-stock.jpg" />
        <SectionContent margin>
          <P color="white" width="500px">
            <i>{R.pathOr("", ["attributes", "quote"])(content)}</i>
          </P>
        </SectionContent>
      </Section>
      <Section padding="20px 0 50px 0">
        <H>Projectos em destaque</H>
        <Divider width="33%" margin="0 0 30px 0" />
        <WideCard
          image={R.pathOr("", ["attributes", "projects", "project1", "image"])(
            content
          )}
          title={R.pathOr("", ["attributes", "projects", "project1", "name"])(
            content
          )}
          description={R.pathOr("", [
            "attributes",
            "projects",
            "project1",
            "description"
          ])(content)}
        />
        <WideCard
          image={R.pathOr("", ["attributes", "projects", "project2", "image"])(
            content
          )}
          title={R.pathOr("", ["attributes", "projects", "project2", "name"])(
            content
          )}
          description={R.pathOr("", [
            "attributes",
            "projects",
            "project2",
            "description"
          ])(content)}
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
