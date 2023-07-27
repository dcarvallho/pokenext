import React from "react";
import Image from "next/image";

const Card = ({ pokemon }) => {
  return (
    <div>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default Card;
