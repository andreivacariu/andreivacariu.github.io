import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
        <script src="https://raw.githubusercontent.com/Nicc0/MSV/master/msv.js" defer type="text/javascript"></script>
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
