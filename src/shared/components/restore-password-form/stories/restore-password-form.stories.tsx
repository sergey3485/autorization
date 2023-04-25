import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RestorePasswordForm, RestorePasswordFormProps } from '../restore-password-form';

export default {
  title: 'RestorePasswordForm',
  component: RestorePasswordForm,
} as Meta;

const Template: Story<RestorePasswordFormProps> = (args) => <RestorePasswordForm {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
