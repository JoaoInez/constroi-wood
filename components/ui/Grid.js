import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ column = false }) => (column ? "column" : "row")};
  width: ${({ width = "100%" }) => width};
  max-width: ${({ maxWidth = "initial" }) => maxWidth};
  margin: ${({ margin = 0 }) => margin};
`;

const Col = styled.div`
  align-items: ${({ align = "initial" }) => align};
  justify-content: ${({ justify = "initial" }) => justify};
  flex-direction: ${({ column = false }) => (column ? "column" : "initial")};
  padding: ${({ padding = 0 }) => padding};
  min-width: ${({ minWidth = "initial" }) => minWidth};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "initial")};

  @media ${({ theme: { media } }) => media.mobile} {
    flex: ${({ sm = 1 }) => sm};
    display: ${({ sm = 1, flex = false }) =>
      sm === 0 ? "none" : flex ? "flex" : "initial"};
  }
  @media ${({ theme: { media } }) => media.laptop} {
    flex: ${({ md = 1 }) => md};
    display: ${({ md = 1, flex = false }) =>
      md === 0 ? "none" : flex ? "flex" : "initial"};
  }
  @media ${({ theme: { media } }) => media.desktop} {
    flex: ${({ lg = 1 }) => lg};
    display: ${({ lg = 1, flex = false }) =>
      lg === 0 ? "none" : flex ? "flex" : "initial"};
  }
`;

export { Row, Col };
