import React, { useState, useEffect } from "react";
import Group from "./Group";
import port from "public/backendport";
import Spinner from "../helpers/Spiner";
const GroupsContainer = () => {
  const [group, setGroup] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(`${port}groups`)
      .then((res) => res.json())
      .then((res) => setGroup(res))
      .catch((err) => console.log(err))
      .finally(() => setLoaded(true));
  }, []);
  const Mapper = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {group.map((element) => (
          <Group teams={element.teams} id={element.groupname} key={element.groupname} />
        ))}
      </div>
    );
  };
  return loaded ? <Mapper /> : <Spinner />;
};

export default GroupsContainer;
