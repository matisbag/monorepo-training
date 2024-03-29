import React from 'react';

import { Button } from '@repo/ui';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Hello World',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Hello World',
  type: 'outline',
};
