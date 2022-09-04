import type { NextPage } from "next";
import Head from "next/head";
import ProfileCard from "../components/ProfileCard";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 card-background bg-darkCyan">
      <Head>
        <title>Profile Card Component</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <ProfileCard />
    </div>
  );
};

export default Home;
