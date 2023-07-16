import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainContainer = (props) => {
  return (
    <div>
      <nav>
        <div>
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
      <main>{props.children}</main>
      <footer>
        <p>
          <span>PokeNext</span> &copy; 2023
        </p>
      </footer>
    </div>
  );
};

export default MainContainer;
