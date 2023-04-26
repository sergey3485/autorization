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

const RegistrationPage: ExtendedNextPage = () => {
  const terms = <Text component="a" color="accent.accent11">Terms of Service</Text>;
  const privacy = <Text component="a" color="accent.accent11">Privacy Policy</Text>;

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
            Create your account
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

          <Box
            width="100%"
            marginTop="1x"
          >
            <Text>By creating an account, you agree to the {terms} and the {privacy}</Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            width="100%"
            marginTop="6x"
          >
            <Button variant="primary" color="accent">
              Get started
            </Button>
          </Box>

          <Box
            width="100%"
            marginTop="11x"
            marginBottom="8x"
          >
            <Divider
              label={<Text color="text.primary">Or sign up with</Text>}
            />
          </Box>

          <Affiliation />

          <Box
            marginTop="9x"
          >
            <Stack space="2x">
              <Text>Already have an account?</Text>
              <Text component="a" color="accent.accent11" href="login">Sign in</Text>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

RegistrationPage.Layout = MainLayout;
export default RegistrationPage;
