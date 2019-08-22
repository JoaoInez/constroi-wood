import React, { useRef, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Bath } from "styled-icons/fa-solid/Bath";
import { PaintRoller } from "styled-icons/fa-solid/PaintRoller";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { LongArrowAltRight } from "styled-icons/fa-solid/LongArrowAltRight";
import { LongArrowAltDown } from "styled-icons/fa-solid/LongArrowAltDown";
import portfolio from "../../../data/portfolio.json";
import {
  H,
  P,
  Button,
  Row,
  Col,
  Section,
  SectionImage,
  SectionContent,
  Divider
} from "../../ui";
import Card from "./ServiceCard";
import WideCard from "./ProjectCard";

const Title = styled(H)`
  font-size: 2.6rem;
  margin: 0 0 30px 0;
`;

const ServiceIcon = css`
  width: 50px;
  color: ${({ theme }) => theme.blue};
`;

const HammerIcon = styled(Hammer)`
  ${ServiceIcon}
`;

const PaintRollerIcon = styled(PaintRoller)`
  ${ServiceIcon}
`;

const BathIcon = styled(Bath)`
  ${ServiceIcon}
`;

const ArrowRightIcon = styled(LongArrowAltRight)`
  width: 20px;
  margin-left: 10px;
`;

const ArrowDownIcon = styled(LongArrowAltDown)``;

const ContactButton = styled(Button)`
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.1s ease-in-out;

  &:active {
    box-shadow: 0 0 6px 3px ${({ theme }) => theme.blue};
  }

  ${P} {
    text-shadow: none;
    animation-name: ${({ state }) =>
      state === "hover"
        ? "text_hover_v"
        : state === "blur"
        ? "text_blur_v"
        : "none"};
    animation-duration: 0.2s;
    animation-fill-mode: both;
    pointer-events: none;
    animation-delay: ${({ state }) => (state === "blur" ? "0.15s" : 0)};

    &:hover {
      animation-name: hover;
    }

    @keyframes text_hover_v {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(40px);
      }
    }

    @keyframes text_blur_v {
      from {
        transform: translateY(40px);
      }

      to {
        transform: translateY(0);
      }
    }
  }

  ${ArrowDownIcon} {
    position: absolute;
    height: 40px;
    top: 10px;
    transform: translateY(-50px);
    right: calc(50% - 10px);
    animation-name: ${({ state }) =>
      state === "hover"
        ? "arrow_hover_h"
        : state === "blur"
        ? "arrow_blur_h"
        : "none"};
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-delay: ${({ state }) => (state === "blur" ? 0 : "0.15s")};

    @keyframes arrow_hover_h {
      from {
        transform: translateY(-50px);
      }

      to {
        transform: translateY(0);
      }
    }

    @keyframes arrow_blur_h {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(-50px);
      }
    }
  }
`;

const PortfolioButton = styled(Button)`
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.1s ease-in-out;

  &:active {
    box-shadow: 0 0 6px 3px ${({ theme }) => theme.blue};
  }

  ${P} {
    animation-name: ${({ state }) =>
      state === "hover"
        ? "text_hover"
        : state === "blur"
        ? "text_blur"
        : "none"};
    animation-duration: 0.2s;
    animation-fill-mode: both;
    pointer-events: none;
    animation-delay: ${({ state }) => (state === "blur" ? "0.15s" : 0)};

    &:hover {
      animation-name: hover;
    }

    @keyframes text_hover {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-10px);
        color: ${({ theme, bgColor }) => theme[bgColor]};
      }
    }

    @keyframes text_blur {
      from {
        transform: translateX(-10px);
      }

      to {
        transform: translateX(0);
        color: ${({ theme, color }) => theme[color]};
      }
    }
  }

  ${ArrowRightIcon} {
    position: absolute;
    height: 40px;
    top: 10px;
    right: 20px;
    animation-name: ${({ state }) =>
      state === "hover"
        ? "arrow_hover"
        : state === "blur"
        ? "arrow_blur"
        : "none"};
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-delay: ${({ state }) => (state === "blur" ? 0 : "0.15s")};
    opacity: 0;

    @keyframes arrow_hover {
      from {
        right: 20px;
        opacity: 0;
      }

      to {
        right: 10px;
        opacity: 1;
      }
    }

    @keyframes arrow_blur {
      from {
        right: 10px;
        opacity: 1;
      }

      to {
        right: 20px;
        opacity: 0;
      }
    }
  }
`;

const BottomAnchor = styled.div``;

const Homepage = () => {
  const bottomRef = useRef();

  const scrollToContacts = () =>
    bottomRef.current.scrollIntoView({ behavior: "smooth" });

  const [contactBtn, setContactBtn] = useState("none");

  const [portfolioBtn, setPortfolioBtn] = useState("none");

  return (
    <>
      <Section height="calc(100vh - 73px)" bgColor="black" padding={0} relative>
        <SectionImage url="/static/stock-const-1.jpg" />
        <SectionContent margin>
          <Title color="white">ConstroiWood</Title>
          <Divider width="100px" color="white" margin="0 0 30px 0" />
          <P color="white" align="center" width="600px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
              <HammerIcon />
              <H h={4} align="center">
                Carpintaria
              </H>
              <P align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
            </Card>
          </Col>
          <Col flex justify="center">
            <Card>
              <PaintRollerIcon />
              <H h={4} align="center">
                Pinturas
              </H>
              <P align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
            </Card>
          </Col>
          <Col flex justify="center">
            <Card>
              <BathIcon />
              <H h={4} align="center">
                Remodelações
              </H>
              <P align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
            </Card>
          </Col>
        </Row>
      </Section>
      <Section height="200px" bgColor="black" padding={0} relative>
        <SectionImage url="/static/stock-carp-1.jpg" />
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
        <H>Projectos</H>
        <Divider width="33%" margin="0 0 30px 0" />
        <WideCard
          image={portfolio.carpentry[0].images[0]}
          title={portfolio.carpentry[0].title}
          description={portfolio.carpentry[0].description}
        />
        <WideCard
          image={portfolio.carpentry[1].images[0]}
          title={portfolio.carpentry[1].title}
          description={portfolio.carpentry[1].description}
        />
        <Link href="/portfolio">
          <a>
            <PortfolioButton
              color="white"
              size="lg"
              margin="30px 0 0 0"
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
