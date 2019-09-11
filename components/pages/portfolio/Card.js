import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { P } from "../../ui";

const CardS = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${({ theme }) => theme.lightShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
  margin: 20px;
  position: relative;
`;

const CardImageWrapper = styled.div`
  min-height: 200px;
  min-width: 300px;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CardImage = styled.div`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const CardContent = styled.div`
  padding: 10px 0;
`;

const OngoingBadge = styled.div`
  position: absolute;
  top: 25px;
  right: -115px;
  background-color: ${({ theme }) => theme.yellow};
  width: 100%;
  display: flex;
  justify-content: center;
  transform: rotateZ(45deg);
  z-index: 1;
  pointer-events: none;
  box-shadow: 0 2px 8px ${({ theme }) => theme.darkGrey};
`;

const Card = ({ images, title, open, ongoing, thumbnail }) => (
  <CardS>
    {ongoing && (
      <OngoingBadge>
        <P color="black">Em curso</P>
      </OngoingBadge>
    )}
    <CardImageWrapper>
      <CardImage
        url={thumbnail}
        onClick={() => open({ state: true, images })}
      />
    </CardImageWrapper>
    <CardContent>{title}</CardContent>
  </CardS>
);

Card.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  ongoing: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default Card;
