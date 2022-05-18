import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from '../components/tab/Tab';

export default {
  title: 'Panel',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Text #1",
};