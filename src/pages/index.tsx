import { type NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/home/Layout";
import Navbar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import Backers from "@/components/home/Backers";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Temporal</title>
          <meta name="description" content="Decentralized Finances" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <Hero />
        <Backers />
      </Layout>
    </>
  );
};

export default Home;
