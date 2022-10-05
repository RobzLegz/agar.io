import Head from "next/head";
import React from "react";

export interface HeadParserProps {
  title: string;
  description: string;
}

const HeadParser: React.FC<HeadParserProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadParser;
