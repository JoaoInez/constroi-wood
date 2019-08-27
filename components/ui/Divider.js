import styled from "styled-components";

const Divider = styled.hr`
  border: ${({ thickness = "1px" }) => thickness} solid
    ${({ theme, color = "darkGrey" }) => theme[color]};
  width: ${({ width = "100%" }) => width};
  margin: ${({ margin = "10px 0" }) => margin};
`;

export { Divider };
