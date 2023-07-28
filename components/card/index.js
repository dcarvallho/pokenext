import React from "react";
import Image from "next/image";
import Link from "next/link";

import style from './style.module.css'

const Card = ({ pokemon }) => {
  return (
    <div className={style.card}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p>{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>details</Link>
    </div>
  );
};

export default Card;
