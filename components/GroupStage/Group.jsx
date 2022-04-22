import React from "react";
import Card from "../helpers/Card";
import Link from "next/link";
import Team from "./Team";

const Group = ({ teams, id = "a" }) => {
  return (
    <Link href={`/groups/${id}`} passHref>
      <a>
        <Card>
          {teams.map((element, index) => (
            <Team flag={element.flag} name={element.name} key={index} />
          ))}
        </Card>
      </a>
    </Link>
  );
};

export default Group;
