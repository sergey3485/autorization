import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  Space,
} from '@effable/react';

import * as S from './restore-announce.styled';

export interface RestoreAnnounceProps {
  /**
   * The content
   */
  mail: string;
}

export const RestoreAnnounce = (props: RestoreAnnounceProps): JSX.Element => {
  const {
    mail,
  } = props;

  const account = <strong>{mail}</strong>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="400px"
    >
      <Heading variant="h1">
        Reset password
      </Heading>
      <Space h="8x" />

      <Text textAlign="center">
        If account {account} exists, an email will be sent with further instructions
      </Text>
      <Space h="7x" />

      <Text component="a" color="accent.accent11" href="auth/restore-password">Back to Sign in</Text>

    </Box>
  );
};
