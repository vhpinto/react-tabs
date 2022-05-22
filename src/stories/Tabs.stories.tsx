import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from '../components/tab/Tabs';

export default {
  title: 'Tabs/Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  titles: [
      "Stories tab 1 title",
      "Stories tab 2 title",
      "Stories tab 3 title",
      "Stories tab 4 title"
    ],
  texts: [
      "Stories tab 1 content",
      "Stories tab 2 content",
      "Stories tab 3 content",
      "Stories tab 4 content"
    ]
};