import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Affiliation } from '../affiliation';

export default {
  title: 'Affiliation',
  component: Affiliation,
} as Meta;

const Template: Story = (args) => <Affiliation {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Affiliation',
};
