import React from "react";
import FFA from "../../game/ffa/FFA";
import PageModule from "../PageModule";

const FFAPage = () => {
  return (
    <PageModule title="Agar.io" description="Agar.io, but bad">
      <FFA />
    </PageModule>
  );
};

export default FFAPage;
