import * as React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Space,
  Stack,
  Divider,
  Container,
} from '@effable/react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { MainLayout } from '@/layout/main-layout';

const LoginPage: ExtendedNextPage = () => {
  return (
    <Container>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth="400px"
          height="100%"
          alignItems="center"
          component="form"
          justifyContent="center"
        >
          <Heading variant="h1">
            Sign in
          </Heading>
          <Space h="8x" />

          <Box
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <Text>Email</Text>
            <Space h="1x" />

            <input />
            <Space h="4x" />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            width="100%"
          >
            <Text>Password</Text>
            <Space h="1x" />

            <input />
            <Space h="1x" />
          </Box>

          <Box width="100%">
            <Text component="a" color="accent.accent11" href="auth/restore-password">Forgot password?</Text>
          </Box>
          <Space h="6x" />

          <Box
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            width="100%"
          >
            <Button variant="primary" color="accent">
              Continue
            </Button>
          </Box>
          <Space h="11x" />

          <Box
            width="100%"
          >
            <Stack
              space="2x"
              alignItems="center"
            >
              <Box
                width="100%"
              >
                <Divider />
              </Box>
              <Box width="max-content">
                <Text>Or sign in with</Text>
              </Box>
              <Box
                width="100%"
              >
                <Divider />
              </Box>
            </Stack>
          </Box>
          <Space h="8x" />

          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            1
          </Box>
          <Space h="9x" />

          <Box>
            <Stack space="2x">
              <Text>Don't have an account yet?</Text>
              <Text component="a" color="accent.accent11">Sign up</Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

LoginPage.Layout = MainLayout;
export default LoginPage;
