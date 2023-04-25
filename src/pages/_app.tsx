import * as React from 'react';
import type { AppProps } from 'next/app';
import { EffableProvider } from '@effable/react';
import { ExtendedNextPage } from '../shared/types/extended-next-page';

type NewAppProps = AppProps & { Component: ExtendedNextPage };

const App = ({ Component, pageProps }: NewAppProps) => {
  const LayoutComponent = Component.Layout ?? React.Fragment;
  return (
    <EffableProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </EffableProvider>
  );
};

export default App;
