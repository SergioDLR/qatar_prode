import React from "react";
import Match from "./Match";
import matches from "../../public/matches.json";
const MatchContainer = ({ groupId }) => {
  //Todo filter by group id and propagate all matches info
  let groupA = matches.a;
  return groupA.map((element, index) => <Match key={index} match={element} />);
};

export default MatchContainer;
