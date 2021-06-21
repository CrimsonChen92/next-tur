import "../styles/globals.css";
import Layout from "../components/Layout"; //by doing this, all files in the app will now have this global Layout

// youtube link https://www.youtube.com/watch?v=mTz0GXj8NN0&list=WL&index=55&t=1666s

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
