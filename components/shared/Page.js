import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import theme from "../../styles/theme";
import Nav from "./Nav";
import Footer from "./Footer";

const Wrapper = styled.main`
  margin-top: 73px;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Nav />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.array
};

export default Page;
