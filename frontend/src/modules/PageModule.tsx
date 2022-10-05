import { NextPage } from "next";
import React from "react";
import HeadParser, { HeadParserProps } from "./HeadParser";

interface PageModuleProps extends HeadParserProps {
  className?: string;
  children: React.ReactNode;
}

const PageModule: NextPage<PageModuleProps> = ({
  description,
  title,
  className,
  children,
}) => {
  return (
    <main className={`page ${className}`}>
      <HeadParser title={title} description={description} />

      {children}
    </main>
  );
};

export default PageModule;
