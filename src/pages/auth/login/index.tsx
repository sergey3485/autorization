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
import { Affiliation } from '@/shared/components/affiliation';

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

          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            marginTop="8x"
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
            marginTop="4x"
          >
            <Text>Password</Text>
            <Space h="1x" />

            <input />
          </Box>

          <Box width="100%" marginBottom="6x" marginTop="1x">
            <Text component="a" color="accent.accent11" href="restore-password">Forgot password?</Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            width="100%"
            marginBottom="11x"
          >
            <Button variant="primary" color="accent">
              Continue
            </Button>
          </Box>

          <Box
            width="100%"
            marginBottom="8x"
          >
            <Divider
              label={<Text color="text.primary">Or sign up with</Text>}
            />
          </Box>

          <Affiliation />

          <Box marginTop="9x">
            <Stack space="2x">
              <Text>Don&rsquo;t have an account yet?</Text>
              <Text component="a" color="accent.accent11" href="registration">Sign up</Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

LoginPage.Layout = MainLayout;
export default LoginPage;
