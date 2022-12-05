import dynamic from "next/dynamic";
import React from "react";

export { getStaticProps } from "@/pages.server/404";

const NotFound = dynamic(() => import("~>/404"));

const NotFoundPage = () => {
  return <NotFound />;
};

NotFoundPage.getLayout = (page) => <>{page}</>;

export default NotFoundPage;
