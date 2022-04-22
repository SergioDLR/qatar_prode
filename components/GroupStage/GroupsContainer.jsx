import React from "react";
import Group from "./Group";
//TODO: this component should fetch groups information matches and teams etc. should charge point informations
const GroupsContainer = () => {
  const teams = [
    { name: "Qatar", flag: "https://via.placeholder.com/400.png" },
    { name: "Ecuador", flag: "https://via.placeholder.com/400.png" },
    { name: "Senegal", flag: "https://via.placeholder.com/400.png" },
    { name: "P.Bajos", flag: "https://via.placeholder.com/400.png" },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      <Group teams={teams}></Group>
      <Group teams={teams}></Group>
      <Group teams={teams}></Group>
      <Group teams={teams}></Group>

      <Group teams={teams}></Group>
      <Group teams={teams}></Group>
      <Group teams={teams}></Group>
      <Group teams={teams}></Group>
    </div>
  );
};

export default GroupsContainer;
