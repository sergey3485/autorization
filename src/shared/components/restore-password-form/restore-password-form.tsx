import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Button,
  Space,
} from '@effable/react';

export interface RestorePasswordFormProps {
  /**
   * The content
   */
  changeMail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
  mail: string;
}

export const RestorePasswordForm = (props: RestorePasswordFormProps): JSX.Element => {
  const {
    changeMail,
    mail,
    changePassword,
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      maxWidth="400px"
      component="form"
      onSubmit={changePassword}
    >
      <Heading variant="h1">
        Forgot password?
      </Heading>
      <Space h="8x" />

      <Text>Enter the email address you used to register</Text>
      <Space h="4x" />

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <Text>Email</Text>
        <Space h="1x" />

        <input value={mail} onChange={changeMail} />
        <Space h="7x" />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        width="100%"
      >
        <Button variant="primary" color="accent" onClick={changePassword}>
          Reset password
        </Button>
      </Box>
      <Space h="8x" />

      <Text component="a" color="accent.accent11" href="login">Back to Sign in</Text>

    </Box>
  );
};
