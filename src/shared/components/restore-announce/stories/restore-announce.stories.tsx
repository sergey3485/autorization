import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RestoreAnnounce, RestoreAnnounceProps } from '../restore-announce';

export default {
  title: 'RestoreAnnounce',
  component: RestoreAnnounce,
} as Meta;

const Template: Story<RestoreAnnounceProps> = (args) => <RestoreAnnounce {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
