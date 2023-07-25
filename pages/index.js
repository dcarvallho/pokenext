import Head from "next/head";
import React from "react";

import HomePage from "../components/home/index";

const Home = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
