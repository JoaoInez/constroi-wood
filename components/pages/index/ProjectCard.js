import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Col, Row, H, P } from "../../ui";

const WideCard = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  margin: 20px 40px;

  &:nth-last-of-type(1) {
    margin-bottom: 50px;
  }
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
  padding: 10px 40px 20px 40px;
  min-width: 200px;
  max-width: 600px;
`;

const ProjectCard = ({ image, title, description }) => (
  <WideCard>
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
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProjectCard;
