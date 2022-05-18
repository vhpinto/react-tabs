import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from '../components/tab/Tabs';

export default {
  title: 'Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  titles: [
      "Tab 1 title",
      "Tab 2 title",
      "Tab 3 title",
      "Tab 4 title"
    ],
  texts: [
      "Tab 1 content",
      "Tab 2 content",
      "Tab 3 content",
      "Tab 4 content"
    ]
};