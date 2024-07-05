import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ashish Kumar Saini | Portfolio</title>
        <meta
          name="description"
          content="Ashish Kumar Saini is a Full-stack web developer with 3+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, portfolio, typescript, reactjs, node, nodejs, express, expressjs, mongodb, mongoDB, react native, sql, postgressql, aws, amazon web services, java, spring, spring boot, system design, lld, hld"
        />
        <meta name="author" content="Ashish Kumar Saini" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
