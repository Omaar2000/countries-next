import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
