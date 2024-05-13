import { type NextPage } from "next";
import Head from "next/head";
// import Layout from "@/components/basic/Layout";
import RootLayout from "@/app/layout";
import Navbar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import Backers from "@/components/home/Backers";

const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Head>
          <title>Temporal</title>
          <meta name="description" content="Decentralized Finances" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Hero />
        <Backers />
      </RootLayout>
    </>
  );
};

export default Home;
