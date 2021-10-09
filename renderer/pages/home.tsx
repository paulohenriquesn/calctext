import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>CalcText</title>
      </Head>
      <Layout />
    </React.Fragment>
  );
};

export default Home;
