import React from "react";
import Page from "../components/shared/Page";
import Meta from "../components/shared/Meta";
import GlobalStyle from "../styles/globalStyle";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Meta />
    <Page>
      <GlobalStyle />
      <Component {...pageProps} />
    </Page>
  </>
);

export default MyApp;
