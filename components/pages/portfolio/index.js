import React, { useState } from "react";
import styled from "styled-components";
import { Section, H, Divider } from "../../ui";
import { carpentry, painting, remodeling } from "../../../data/portfolio.json";
// import carpentry from "../../../content/portfolio/carpentry.md";
// import painting from "../../../content/portfolio/painting.md";
// import remodeling from "../../../content/portfolio/remodeling.md";
import Card from "./Card";
import Gallery from "./Gallery";

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const Portfolio = () => {
  const [open, setOpen] = useState({
    state: false,
    images: []
  });

  return (
    <>
      <Section padding="0 0 40px 0">
        <H>Carpintaria</H>
        <Divider width="33%" margin="0 0 20px 0" />
        <Row>
          {carpentry.map(({ images, title }, i) => (
            <Card key={i} images={images} title={title} open={setOpen} />
          ))}
        </Row>
        <H>Pinturas</H>
        <Divider width="33%" margin="0 0 20px 0" />
        <Row>
          {painting.map(({ images, title }, i) => (
            <Card key={i} images={images} title={title} open={setOpen} />
          ))}
        </Row>
        <H>Remodelações</H>
        <Divider width="33%" margin="0 0 20px 0" />
        <Row>
          {remodeling.map(({ images, title }, i) => (
            <Card key={i} images={images} title={title} open={setOpen} />
          ))}
        </Row>
      </Section>
      <Gallery open={open.state} close={setOpen} images={open.images} />
    </>
  );
};

export default Portfolio;
