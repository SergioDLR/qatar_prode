import React from "react";
import Card from "../helpers/Card";
import ScoreInput from "./ScoreInput";
import Image from "next/image";
const Match = ({ match }) => {
  //this should have match info on top or bottom
  return (
    <div className="w-1/4 m-auto mt-2">
      <Card>
        <h2 className="font-bold text-center my-1">
          <i className="fas fa-calendar" /> {match.day}-{match.month} <i className="fas fa-clock" /> {match.hour}
        </h2>
        <div className="flex">
          <ScoreInput />

          <Image alt="flag" src={match.flagLocal} width={30} height={20} />
          <h2 className="w-1/4 mx-2">{match.teamLocal}</h2>
          <h3 className="mx-auto">VS</h3>
          <ScoreInput />
          <Image alt="flag" src={match.flagVisitor} width={30} height={20} />
          <h2 className="w-1/4 mx-2">{match.teamVisitor}</h2>
        </div>
      </Card>
    </div>
  );
};

export default Match;
