import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const FunctionComponent = Component as React.FunctionComponent;

  return <FunctionComponent {...pageProps} />;
};

export default App;
