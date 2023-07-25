import "../styles/globals.css";
import MainContainer from "../components/layout";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp;
