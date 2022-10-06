import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "ui";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const _hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <Button>hello world</Button>
      </main>
    </>
  );
};

export default Home;
