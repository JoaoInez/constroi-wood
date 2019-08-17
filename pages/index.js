import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Bath } from "styled-icons/fa-solid/Bath";
import { PaintRoller } from "styled-icons/fa-solid/PaintRoller";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { RightArrow } from "styled-icons/boxicons-solid/RightArrow";
import { LeftArrow } from "styled-icons/boxicons-solid/LeftArrow";
import portfolio from "../data/portfolio.json";
import { H, P } from "../components/Typography";
import { Button } from "../components/Buttons";
import { Row, Col } from "../components/Grid";

const ImageSection = styled.section`
  height: calc(100vh - 73px);
  position: relative;
  background-color: black;
`;

const ImageBackground = styled.div`
  background-image: url("/static/stock-const-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const ImageContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${P} {
    margin: 0 20px;
  }
`;

const Title = styled(H)`
  font-size: 2.6rem;
`;

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 50px 0;
`;

const HammerIcon = styled(Hammer)`
  width: 50px;
  height: auto;
`;

const PaintRollerIcon = styled(PaintRoller)`
  width: 50px;
  height: auto;
`;

const BathIcon = styled(Bath)`
  width: 50px;
  height: auto;
`;

const Divider = styled.hr`
  border: 1px solid ${({ theme, color = "grey" }) => theme[color]};
  width: ${({ width = "100%" }) => width};
  margin: ${({ margin = "10px 0" }) => margin};
`;

const Card = styled.div`
  margin: 30px 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 8px #f0f1f2;
  border-radius: 0 6px 6px 6px;
  overflow: hidden;
  min-width: 250px;
  max-width: 300px;
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 50px 0;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ArrowButton = css`
  position: absolute;
  height: 20px;
  top: calc(50% - 10px);
  cursor: pointer;
`;

const LeftArrowButton = styled(LeftArrow)`
  ${ArrowButton}
  left: 5px;
`;

const RightArrowButton = styled(RightArrow)`
  ${ArrowButton}
  right: 5px;
`;

const WideCard = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px #f0f1f2;
  margin: 20px 40px;
  display: ${({ index, focused }) => (index === focused ? "initial" : "none")};
`;

const ProjectImage = styled.div`
  background-image: ${({ url }) => url};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  min-width: 300px;
  height: 100%;
  width: 100%;
`;

const ProjectContent = styled.div`
  padding: 10px 40px;
  min-width: 200px;
`;

const AboutSection = styled.section`
  position: relative;
  background-color: black;
  height: 200px;
`;

const AboutBackground = styled.div`
  background-image: url("/static/stock-carp-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const AboutContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${P} {
    margin: 0 20px;
  }
`;

const home = () => {
  const { carpentry, painting, remodeling } = portfolio;

  const [projects, setProjects] = useState({
    carpentry: {
      focused: 0,
      length: carpentry.length
    },
    painting: {
      focused: 0,
      length: painting.length
    },
    remodeling: {
      focused: 0,
      length: remodeling.length
    }
  });

  const changeProjectFocus = (dir, cat) => () => {
    if (dir === "left") {
      const newFocused =
        projects[cat].focused - 1 >= 0
          ? projects[cat].focused - 1
          : portfolio[cat].length - 1;
      setProjects({
        ...projects,
        [cat]: {
          ...projects[cat],
          focused: newFocused,
          dir
        }
      });
    } else if (dir === "right") {
      const newFocused =
        projects[cat].focused + 1 <= portfolio[cat].length - 1
          ? projects[cat].focused + 1
          : 0;
      setProjects({
        ...projects,
        [cat]: {
          ...projects[cat],
          focused: newFocused
        }
      });
    }
  };

  return (
    <>
      <ImageSection>
        <ImageBackground />
        <ImageContent>
          <Title color="white">Sample title</Title>
          <Divider width="100px" color="white" margin="0 0 30px 0" />
          <P color="white" align="center" width="600px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </P>
          <Button
            color="white"
            size="lg"
            margin="30px 0"
            bgColor="white"
            outline
          >
            Contactos
          </Button>
        </ImageContent>
      </ImageSection>
      <ServicesSection>
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
      </ServicesSection>
      <AboutSection>
        <AboutBackground />
        <AboutContent>
          <P color="white" width="500px">
            <i>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </i>
          </P>
        </AboutContent>
      </AboutSection>
      <ProjectsSection>
        <H>Portfolio</H>
        <Divider width="33%" margin="0 0 30px 0" />
        <H h={3}>Carpintaria</H>
        <ProjectsWrapper>
          <LeftArrowButton onClick={changeProjectFocus("left", "carpentry")} />
          <RightArrowButton
            onClick={changeProjectFocus("right", "carpentry")}
          />
          {carpentry.map(({ title, description, image }, i) => (
            <WideCard key={i} focused={projects.carpentry.focused} index={i}>
              <Row maxWidth="1000px">
                <Col sm={1} md={1} lg={1}>
                  <ProjectImage url={`url(${image})`} />
                </Col>
                <Col sm={1} md={2} lg={2} justify="center">
                  <ProjectContent>
                    <H h={4}>{title}</H>
                    <P>{description}</P>
                  </ProjectContent>
                </Col>
              </Row>
            </WideCard>
          ))}
        </ProjectsWrapper>
        <H h={3}>Pinturas</H>
        <ProjectsWrapper>
          <LeftArrowButton onClick={changeProjectFocus("left", "painting")} />
          <RightArrowButton onClick={changeProjectFocus("right", "painting")} />
          {painting.map(({ title, description, image }, i) => (
            <WideCard key={i} focused={projects.painting.focused} index={i}>
              <Row maxWidth="1000px">
                <Col sm={1} md={1} lg={1}>
                  <ProjectImage url={`url(${image})`} />
                </Col>
                <Col sm={1} md={2} lg={2} justify="center">
                  <ProjectContent>
                    <H h={4}>{title}</H>
                    <P>{description}</P>
                  </ProjectContent>
                </Col>
              </Row>
            </WideCard>
          ))}
        </ProjectsWrapper>
        <H h={3}>Remodelações</H>
        <ProjectsWrapper>
          <LeftArrowButton onClick={changeProjectFocus("left", "remodeling")} />
          <RightArrowButton
            onClick={changeProjectFocus("right", "remodeling")}
          />
          {remodeling.map(({ title, description, image }, i) => (
            <WideCard key={i} focused={projects.remodeling.focused} index={i}>
              <Row maxWidth="1000px">
                <Col sm={1} md={1} lg={1}>
                  <ProjectImage url={`url(${image})`} />
                </Col>
                <Col sm={1} md={2} lg={2} justify="center">
                  <ProjectContent>
                    <H h={4}>{title}</H>
                    <P>{description}</P>
                  </ProjectContent>
                </Col>
              </Row>
            </WideCard>
          ))}
        </ProjectsWrapper>
      </ProjectsSection>
    </>
  );
};

export default home;
