import React from "react";
import Image from "next/image";

import styles from "./index.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto:</h1>
      <p>
        Culpa Lorem mollit aliquip eiusmod excepteur aliquip tempor Lorem
        reprehenderit consequat irure in ut. Sit veniam enim cillum occaecat
        ipsum quis consequat elit dolor elit dolore. Aliqua adipisicing
        consectetur irure nostrud. Culpa consectetur do reprehenderit mollit
        fugiat consectetur non aliqua id sunt elit minim incididunt in.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      ></Image>
    </div>
  );
};

export default About;
