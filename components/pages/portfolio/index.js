import React, { useState } from "react";
import styled from "styled-components";
import * as R from "ramda";
import { Section, H, Divider } from "../../ui";
import carpentryContent from "../../../content/portfolio/carpentry.md";
import paintingContent from "../../../content/portfolio/painting.md";
import remodelingContent from "../../../content/portfolio/remodeling.md";
import Card from "./Card";
import Gallery from "./Gallery";

const carpentry = R.path(["attributes", "carpentry"])(carpentryContent);
const painting = R.path(["attributes", "painting"])(paintingContent);
const remodeling = R.path(["attributes", "remodeling"])(remodelingContent);

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
          {carpentry &&
            carpentry.map(({ gallery, name }, i) => (
              <Card key={i} images={gallery} title={name} open={setOpen} />
            ))}
        </Row>
        <H>Pinturas</H>
        <Divider width="33%" margin="0 0 20px 0" />
        <Row>
          {painting &&
            painting.map(({ gallery, name }, i) => (
              <Card key={i} images={gallery} title={name} open={setOpen} />
            ))}
        </Row>
        <H>Remodelações</H>
        <Divider width="33%" margin="0 0 20px 0" />
        <Row>
          {remodeling &&
            remodeling.map(({ gallery, name }, i) => (
              <Card key={i} images={gallery} title={name} open={setOpen} />
            ))}
        </Row>
      </Section>
      <Gallery open={open.state} close={setOpen} images={open.images} />
    </>
  );
};

export default Portfolio;
