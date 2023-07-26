import React from "react";
import Image from "next/image";

const HomePageContainer = ({ pokemons }) => {
  return (
    <div>
      <h1>Home Page Teste</h1>
      <Image
        src="/images/pokeball.png"
        width="50"
        height="50"
        alt="Pokeball.png"
      />
      <div>
        {pokemons?.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
};

export default HomePageContainer;
