import React from "react";
import Head from "next/head";
import * as R from "ramda";
import content from "../../content/seo.md";

const Meta = () => {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content={R.compose(
          R.replace(/\u00a0/g, " "),
          R.pathOr("", ["attributes", "description"])
        )(content)}
      />
      <meta
        name="keywords"
        content={R.compose(
          R.replace(/\u00a0/g, " "),
          R.pathOr("", ["attributes", "keywords"])
        )(content)}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>ConstroiWood</title>
    </Head>
  );
};

export default Meta;
