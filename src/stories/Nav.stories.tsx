import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from '../components/tab/Nav';

export default {
  title: 'Tab/Nav',
  component: Nav
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  tabTitle: ['Story title'],
};