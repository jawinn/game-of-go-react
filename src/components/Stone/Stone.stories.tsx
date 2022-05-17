import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stone, { StoneType } from './Stone';

export default {
  title: "Stone",
  component: Stone,
  argTypes: { 
    stoneType: { 
      control: 'false'
    }
  },
  decorators: [
    (Story) => (
      <div style={{width: '75px', height: '75px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Stone>;

const Template: ComponentStory<typeof Stone> = (args) => <Stone {...args} />;

export const BlackStone = Template.bind({});
BlackStone.args = { stoneType: StoneType.Black };

export const WhiteStone = Template.bind({});
WhiteStone.args = { ...BlackStone.args, stoneType: StoneType.White };

export const Empty = Template.bind({});
Empty.args = { ...BlackStone.args, stoneType: StoneType.Empty };
