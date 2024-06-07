import { type NextPage } from "next";
import { Metadata } from 'next'
import RootLayout from "@/app/layout";
import Navbar from "@/components/home/NavBar";
import Hero from "@/components/home/Hero";
import Backers from "@/components/home/Backers";

export const metadata: Metadata = {
  title: "Temporal",
  description: "Future of Market Mechanisms",
  icons: "/favicon.ico"

};

const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <div className="h-full"
          style={{
            backgroundImage: `url('/Hourglass-BG.png')`,
            backgroundSize: 'cover',
            backgroundAttachment: "fixed",
          }}>
          <Navbar />
          <Hero />
          <Backers />
        </div>
      </RootLayout>
    </>
  );
};

export default Home;
