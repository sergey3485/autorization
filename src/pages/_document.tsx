import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { InitializeColorMode } from '@effable/react';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
