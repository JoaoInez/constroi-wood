import styled from "styled-components";

const Divider = styled.hr`
  border: 1px solid ${({ theme, color = "grey" }) => theme[color]};
  width: ${({ width = "100%" }) => width};
  margin: ${({ margin = "10px 0" }) => margin};
`;

export { Divider };
