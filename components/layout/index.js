import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from './index.module.css';

const MainContainer = (props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width="30"
            height="30"
            alt="Logo Pokenext"
          />
          <h1>PokeNext</h1>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/page">Page</Link>
          </li>
        </ul>
      </nav>
      <main className="main-container">{props.children}</main>
      <footer>
        <p>
          <span>PokeNext</span> &copy; 2023
        </p>
      </footer>
    </div>
  );
};

export default MainContainer;
