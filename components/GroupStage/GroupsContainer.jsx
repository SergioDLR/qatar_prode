import React from "react";
import Group from "./Group";
import group from "../../public/group.json";
//TODO: this component should fetch groups information matches and teams etc. should charge point informations
const GroupsContainer = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {group.map((element) => (
        <Group teams={element.matches} id={element.group} key={element.group} />
      ))}
    </div>
  );
};

export default GroupsContainer;
