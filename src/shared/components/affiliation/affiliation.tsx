import * as React from 'react';
import {
  Box,
  Button,
  Stack,
} from '@effable/react';

import Google from '@/shared/icons/Google';
import Facebook from '@/shared/icons/FaceBook';
import Apple from '@/shared/icons/Apple';

export const Affiliation = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        space="2x"
      >
        <Button variant="secondary">
          <Google />
        </Button>

        <Button variant="secondary">
          <Facebook />
        </Button>

        <Button variant="secondary">
          <Apple />
        </Button>
      </Stack>
    </Box>
  );
};
