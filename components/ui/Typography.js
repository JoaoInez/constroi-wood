import styled from "styled-components";

const H = styled.h1`
  color: ${({ theme, color = "black" }) => theme[color]};
  font-weight: ${({ bold = false }) => (bold ? "bold" : "400")};
  font-size: ${({ h = 1 }) =>
    h === 4
      ? "1.2rem"
      : h === 3
      ? "1.5rem"
      : h === 2
      ? "1.8rem"
      : h === 1
      ? "2rem"
      : "2rem"};
  text-align: ${({ align = "initial" }) => align};
`;

const P = styled.p`
  color: ${({ theme, color = "darkGrey" }) => theme[color]};
  margin: 0;
  padding: 0;
  text-align: ${({ align = "initial" }) => align};
  max-width: ${({ width = "800px" }) => width};
  font-weight: ${({ bold = false }) => (bold ? "bold" : "400")};
`;

export { H, P };
