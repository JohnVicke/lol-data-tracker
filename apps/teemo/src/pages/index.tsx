import type { NextLayoutComponentType } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { Button } from "ui";
import { trpc } from "../utils/trpc";

const Home: NextLayoutComponentType = () => {
  const _hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>imba lol</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <Button>hello world</Button>
        <Button color="primary">Primary</Button>
      </main>
    </>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => <div>{page}</div>;
