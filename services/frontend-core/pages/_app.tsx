import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const AnyComponent = Component as React.FunctionComponent;
  console.log('Test');

  return (
    <>
      <Head>
        <title>Frontend Platform - Fly away</title>
      </Head>
      <AnyComponent {...pageProps} />
    </>
  );
};
export default App;
