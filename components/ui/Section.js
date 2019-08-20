import styled from "styled-components";
import { P, H } from "./Typography";
import { Divider } from "./Divider";

const Section = styled.section`
  position: ${({ relative = false }) => (relative ? "relative" : "initial")};
  display: ${({ noFlex = false }) => (noFlex ? "initial" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justify = "initial" }) => justify};
  padding: ${({ padding = "50px 20px" }) => padding};
  height: ${({ height = "initial" }) => height};
  background-color: ${({ theme, bgColor = "white" }) => theme[bgColor]};
`;

const SectionImage = styled.div`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;

const SectionContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${P}, ${H} {
    text-shadow: 0 1px 2px ${({ theme }) => theme.black};
  }

  ${Divider} {
    box-shadow: 0 1px 2px ${({ theme }) => theme.black};
  }

  ${P} {
    margin: ${({ margin = false }) => (margin ? "0 20px" : 0)};
  }
`;

export { Section, SectionImage, SectionContent };
