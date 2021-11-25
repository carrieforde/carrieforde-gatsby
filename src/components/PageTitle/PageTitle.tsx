import Heading from "components/Heading/Heading";
import React from "react";
import { PageTitleProps } from "./PageTitle.interface";
import { pageTitle } from "./pageTitle.module.css";

const PageTitle: React.FC<PageTitleProps> = ({ title }) => (
  <Heading level="h1" className={pageTitle}>
    {title}
  </Heading>
);

export default PageTitle;
