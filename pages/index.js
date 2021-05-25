import Head from "next/head";

import Header from "../components/Header";
import React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buzzinessware</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h2>Welcome to buzzinessware a project management tool!</h2>
      </main>
    </div>
  );
}
