import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("");
  return (
    <>
      <input onChange={(evt) => setName(evt.target.value)}></input>
      <h1>{name}</h1>
        <h2>
            Hole esta es mi primer
        </h2>
    </>
  );
}
