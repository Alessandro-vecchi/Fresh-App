import Head from "next/head";
import Hero from "../components/hero";

// import { api } from "~/utils/api";
import NavBar from "~/components/navBar";
import Habits from "~/components/habits";

export default function Home() {

  return (
    <>
      <Head>
        <title>Fresh by Bell</title>
        <meta name="description" content="The health app for Bell employees" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-screen">
        <NavBar />
        <Habits />
      </main>
    </>
  );
}
