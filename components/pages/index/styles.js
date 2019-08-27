import styled, { css } from "styled-components";
import { Bath } from "styled-icons/fa-solid/Bath";
import { PaintRoller } from "styled-icons/fa-solid/PaintRoller";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { LongArrowAltRight } from "styled-icons/fa-solid/LongArrowAltRight";
import { LongArrowAltDown } from "styled-icons/fa-solid/LongArrowAltDown";
import { H, P, Button } from "../../ui";

const Title = styled(H)`
  font-size: 2.6rem;
  margin: 0 0 30px 0;
  max-width: 500px;
  text-align: center;
`;

const ServiceIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceIcon = css`
  width: 30px;
  color: ${({ theme }) => theme.white};
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
    opacity: 0.8;
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

    @media ${({ theme: { media } }) => media.mobile} {
      animation-name: none;
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

    @media ${({ theme: { media } }) => media.mobile} {
      animation-name: none;
    }

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
    opacity: 0.8;
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

    @media ${({ theme: { media } }) => media.mobile} {
      animation-name: none;
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

    @media ${({ theme: { media } }) => media.mobile} {
      animation-name: none;
    }

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

export {
  Title,
  ServiceIconWrapper,
  HammerIcon,
  PaintRollerIcon,
  BathIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ContactButton,
  PortfolioButton,
  BottomAnchor
};
