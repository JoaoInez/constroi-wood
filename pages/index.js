import React from "react";
import styled from "styled-components";
import { Bath } from "styled-icons/boxicons-regular/Bath";
import { PaintRoll } from "styled-icons/boxicons-regular/PaintRoll";
import { Wrench } from "styled-icons/boxicons-regular/Wrench";
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

const WrenchIcon = styled(Wrench)`
  width: 50px;
  height: auto;
`;

const PaintRollIcon = styled(PaintRoll)`
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

const VerticalDivider = styled.hr`
  border: 1px solid ${({ theme, color = "grey" }) => theme[color]};
  width: 0;
  height: ${({ height = "100px" }) => height};
  margin: ${({ margin = "10px auto" }) => margin};
`;

const Card = styled.div`
  margin: 30px 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ProjectImage = styled.div`
  background-image: ${({ url }) => url};
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  min-width: 300px;
  height: 100%;
  width: 100%;
`;

const WideCard = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px #f0f1f2;
  margin: 20px;
`;

const ProjectWrapper = styled.div`
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
`;

const home = () => (
  <>
    <ImageSection>
      <ImageBackground />
      <ImageContent>
        <Title color="white">Sample title</Title>
        <Divider width="100px" color="white" margin="0 0 30px 0" />
        <P color="white" align="center" width="600px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </P>
        <Button color="white" size="lg" margin="30px 0" bgColor="white" outline>
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
            <WrenchIcon />
            <H h={4}>Title</H>
            <P align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
          </Card>
        </Col>
        <Col flex justify="center">
          <Card>
            <PaintRollIcon />
            <H h={4}>Title</H>
            <P align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </P>
          </Card>
        </Col>
        <Col flex justify="center">
          <Card>
            <BathIcon />
            <H h={4}>Title</H>
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
      <WideCard>
        <Row maxWidth="1000px">
          <Col sm={1} md={1} lg={1}>
            <ProjectImage url="url(/static/eva-faro.jpeg)" />
          </Col>
          <Col sm={1} md={2} lg={2} justify="center">
            <ProjectWrapper>
              <H h={4}>Hotel Eva</H>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
            </ProjectWrapper>
          </Col>
        </Row>
      </WideCard>
      <WideCard>
        <Row maxWidth="1000px">
          <Col sm={1} md={1} lg={1}>
            <ProjectImage url="url(/static/hotel-tivoli.jpg)" />
          </Col>
          <Col sm={1} md={2} lg={2} justify="center">
            <ProjectWrapper>
              <H h={4}>Hotel Tivoli</H>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </P>
            </ProjectWrapper>
          </Col>
        </Row>
      </WideCard>
    </ProjectsSection>
  </>
);

export default home;
