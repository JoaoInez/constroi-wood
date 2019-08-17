import styled from "styled-components";

const Button = styled.button`
  font-size: ${({ size = "md" }) =>
    size === "sm"
      ? "0.8rem"
      : size === "md"
      ? "1rem"
      : size === "lg"
      ? "1.5rem"
      : "1rem"};
  margin: ${({ margin = "initial" }) => margin};
  padding: ${({ size = "md" }) =>
    size === "sm"
      ? "5px 10px"
      : size === "md"
      ? "5px 10px"
      : size === "lg"
      ? "8px 25px"
      : "5px 10px"};
  background-color: ${({ theme, bgColor = "blue", outline = false }) =>
    outline ? "transparent" : theme[bgColor]};
  color: ${({ theme, color = "blue" }) => theme[color]};
  border: 2px solid ${({ theme, bgColor = "blue" }) => theme[bgColor]};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    /* box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; */
    box-shadow: 0 0 3px 2px ${({ theme, color }) => theme[color]};
  }
`;

export { Button };
