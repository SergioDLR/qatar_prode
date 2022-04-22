import React from "react";
import Image from "next/image";

const Team = ({ name, flag, points = 0 }) => {
  return (
    <div className="flex text-red-900 font-bold">
      <div>
        <Image alt="flag" src={flag} width={30} height={20} />
      </div>
      <div className="m-auto">
        <h5>{name}</h5>
      </div>
      <h5>{points}</h5>
    </div>
  );
};

export default Team;
