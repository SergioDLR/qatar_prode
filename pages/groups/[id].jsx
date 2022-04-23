import React from "react";
import { useRouter } from "next/router";
import MatchContainer from "src/components/Fixture/MatchContainer";
const GroupInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1 className="text-white uppercase text-center font-bold text-2xl">Group {id} matches</h1>
      <MatchContainer />
    </>
  );
};

export default GroupInfo;
