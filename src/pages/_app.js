import Footer from "@/components/Footer";
import { Header } from "@/components/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6891333234726935"
        crossOrigin="anonymous"
      ></script>
      <Header></Header>
      <hr style={{ border: "2px solid #4d4d4d" }}></hr>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
