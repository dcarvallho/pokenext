import Head from "next/head";
import React from "react";

import HomePage from "../components/home/index";

export async function getStaticProps() {
  const maxPokemon = 250;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemon}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home = ({ pokemons }) => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <HomePage pokemons={pokemons} />
    </div>
  );
};

export default Home;
