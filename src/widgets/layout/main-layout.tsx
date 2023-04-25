import * as React from 'react';
import {
  Box,
  Heading,
  Stack,
  Text,
} from '@effable/react';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const {
    children,
  } = props;

  return (
    <Box
      display="flex"
      minHeight="100vh"
      width="!00%"
    >
      <Box
        display={{
          base: 'none',
          laptop: 'flex',
        }}
        flex={2}
        justifyContent="center"
        backgroundColor="accent.accent5"
      >
        <Box
          width="100%"
          maxWidth="380px"
          marginTop="192px"
        >
          <Stack
            space="6x"
            direction="column"
          >
            <Heading variant="h0">
              Welcome! Well met.
            </Heading>

            <Text>Create an account or sign in to enjoy all the benefits of the Service</Text>
          </Stack>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flex={{
          base: 1,
          laptop: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
