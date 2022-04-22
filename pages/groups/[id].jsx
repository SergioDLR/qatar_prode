import React from "react";
import { useRouter } from "next/router";
const GroupInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>Group {id}</h1>;
};

export default GroupInfo;
