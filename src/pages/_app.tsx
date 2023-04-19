import type { AppProps } from 'next/app';
import { EffableProvider } from '@effable/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <EffableProvider>
      <Component {...pageProps} />
    </EffableProvider>
  );
};

export default App;
