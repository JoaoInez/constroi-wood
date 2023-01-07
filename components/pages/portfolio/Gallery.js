import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Close } from "@styled-icons/material/Close";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@styled-icons/material/KeyboardArrowRight";
import { P } from "../../ui";

const Wrapper = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  animation-name: ${({ open, close }) =>
    open && !close
      ? "fade_in_gallery"
      : open && close
      ? "fade_out_gallery"
      : "none"};
  animation-duration: 0.25s;
  animation-fill-mode: backwards;

  @keyframes fade_in_gallery {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade_out_gallery {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const CloseArea = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  max-height: 90vh;
  object-fit: contain;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ showing }) => (showing ? "initial" : "none")};
`;

const Icon = css`
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.darkGrey};
  }
`;

const CloseIcon = styled(Close)`
  ${Icon};
  width: 40px;
  top: -40px;
  right: 0;
`;

const ArrowIcon = css`
  ${Icon};
  width: 50px;
  top: calc(50% - 75px);
  padding: 50px 10px;
`;

const LeftArrowIcon = styled(KeyboardArrowLeft)`
  ${ArrowIcon};
  left: 5px;
`;

const RightArrowIcon = styled(KeyboardArrowRight)`
  ${ArrowIcon};
  right: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 800px;
  animation-name: ${({ open, close }) =>
    open && !close
      ? "slide_in_gallery"
      : open && close
      ? "slide_out_gallery"
      : "none"};
  animation-duration: 0.25s;
  animation-fill-mode: backwards;

  @keyframes slide_in_gallery {
    from {
      transform: translateY(50px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide_out_gallery {
    from {
      transform: translateY(0);
      opacity: 1;
    }

    to {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
`;

const ImageCount = styled(P)`
  position: absolute;
  bottom: -20px;
  right: 5px;
`;

const Gallery = ({ open, images, close }) => {
  const [closeAnim, setCloseAnim] = useState(false);
  const [index, setIndex] = useState(0);

  const closeGallery = () => {
    setCloseAnim(true);
    setTimeout(() => {
      setCloseAnim(false);
      setIndex(0);
      close({ state: false, images: [] });
    }, 200);
  };

  const dec = () => {
    const newIndex = index - 1 < 0 ? images.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const inc = () => {
    const newIndex = index + 1 >= images.length ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <Wrapper open={open} close={closeAnim}>
      <CloseArea onClick={closeGallery} />
      <LeftArrowIcon onClick={dec} />
      {images.length > 0 && (
        <ImageContainer open={open} close={closeAnim}>
          <CloseIcon onClick={closeGallery} />
          {images.map((image, i) => (
            <Image key={i} src={image} alt="" showing={i === index} />
          ))}
          <ImageCount color="white">
            {index + 1} de {images.length}
          </ImageCount>
        </ImageContainer>
      )}
      <RightArrowIcon onClick={inc} />
    </Wrapper>
  );
};

Gallery.propTypes = {
  open: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired
};

export default Gallery;
