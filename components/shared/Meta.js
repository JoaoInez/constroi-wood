import React from "react";
import Head from "next/head";

function Meta() {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="Website de ConstroiWood, empresa de carpintaria, pintura de remodelações"
      />
      <meta
        name="keywords"
        content="carpintaria, pintura, remodelações, constroiwood, woodconstroi"
      />
      <meta name="author" content="John Doe" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>ConstroiWood</title>
    </Head>
  );
}

export default Meta;
