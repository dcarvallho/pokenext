import "../styles/globals.css";
import MainContainer from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  );
}

export default MyApp;
