import React from "react";
import PageModule from "../PageModule";
import JoinHandler from './../../game/JoinHandler';

const Join = () => {
  return (
    <PageModule title="Agar.io | Join" description="Join">
      <JoinHandler />
    </PageModule>
  );
};

export default Join;
