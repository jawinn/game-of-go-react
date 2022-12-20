import { Meta } from '@storybook/react';
import Stone, { StoneType } from './Stone';

export default {
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
} as Meta<typeof Stone>;

export const BlackStone = {
  args: {
    stoneType: StoneType.Black
  }
};

export const WhiteStone = {
  args: {
    stoneType: StoneType.White
  }
};

export const Empty = {
  args: {
    stoneType: StoneType.Empty
  }
};
