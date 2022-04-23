import { useState } from "react";
import GroupsContainer from "../components/GroupStage/GroupsContainer";
import Container from "src/components/helpers/Container";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <div>
        <Container>
          <h1 className="text-center text-white text-4xl font-bold uppercase mt-5">Qatar prode</h1>
          <h2 className="text-center text-white text-2xl font-bold my-5"> Group stage</h2>
          <GroupsContainer />
          <h2 className="text-center text-white text-2xl font-bold my-5"> Group stage look in: Date</h2>
        </Container>
      </div>
    </>
  );
}
