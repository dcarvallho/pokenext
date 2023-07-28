import React from "react";
import Image from "next/image";

import Card from "../card";

import styles from "./index.module.css";

const HomePageContainer = ({ pokemons }) => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokeball.png"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons?.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id}/>
        ))}
      </div>
    </>
  );
};

export default HomePageContainer;
