import Head from "next/head";
import React from "react";

export interface HeadParserProps {
  title: string;
  description: string;
}

const HeadParser: React.FC<HeadParserProps> = ({ title, description }) => {
  return (
    <Head>
      <title>Kidala upload | {title}</title>
      <meta name="twitter:title" content={`Kidala upload | ${title}`} />
      <meta property="og:title" content={`Kidala upload | ${title}`} />
      <meta name="twitter:site" content="kidala.life" />
      <meta property="og:image" content="/images/janisbataragsuzliso.png" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/janisbataragsuzliso.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="kidala.life" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default HeadParser;
