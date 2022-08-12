import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from "next-auth/react"

import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
          <Layout>
      <Component {...pageProps} />
      </Layout>
      <Footer/>
    </SessionProvider>
  )
}
