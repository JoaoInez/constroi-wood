import React from "react";
import App, { Container } from "next/app";
import Page from "../components/shared/Page";
import Meta from "../components/shared/Meta";
import GlobalStyle from "../styles/globalStyle";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Meta />
        <Page>
          <GlobalStyle />
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}
