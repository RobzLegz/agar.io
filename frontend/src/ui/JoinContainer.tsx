import { useRouter } from "next/router";
import React from "react";

const JoinContainer = () => {
  const router = useRouter();

  return <button onClick={() => router.push("/join")}>Play</button>;
};

export default JoinContainer;
