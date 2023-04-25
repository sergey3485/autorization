import * as React from 'react';
import {
  Box,
  Text,
  Container,
  Button,
} from '@effable/react';

import { ExtendedNextPage } from '@/shared/types/extended-next-page';
import { RestorePasswordForm } from '@/shared/components/restore-password-form';
import { RestoreAnnounce } from '@/shared/components/restore-announce';

const RestorePassword: ExtendedNextPage = () => {
  const [mail, setMail] = React.useState<string>('');

  const [isSent, setIsSent] = React.useState<boolean>(false);

  const changePassword = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!mail) {
      return;
    }
    setIsSent(true);
  };

  const changeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.currentTarget.value);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        minHeight="100vh"
        mt={{
          base: '14x',
          tablet: '128px',
        }}
      >
        {
          isSent ? <RestoreAnnounce mail={mail} />
            : (
              <RestorePasswordForm
                mail={mail}
                changeMail={changeMail}
                changePassword={changePassword}
              />
            )
        }
      </Box>

    </Container>
  );
};

export default RestorePassword;
