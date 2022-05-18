import { ComponentStory, ComponentMeta } from '@storybook/react';
import Point from './Point';

export default {
  title: "Point",
  component: Point,
  decorators: [
    (Story) => (
      <ol style={styles.testList}>
        <Story/>
      </ol>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  }
} as ComponentMeta<typeof Point>;

const Template: ComponentStory<typeof Point> = (args) => (
  <Point {...args} />
);

export const DefaultPoint = Template.bind({});
DefaultPoint.args = { gridX: 1, gridY: 1, boardSize: 9, turn: false };
DefaultPoint.storyName = 'Default Middle';

export const StarPoint = Template.bind({});
StarPoint.args = { ...DefaultPoint.args, gridX: 5, gridY: 5 };
StarPoint.storyName = 'Star Point ●'

export const CornerTopLeft = Template.bind({});
CornerTopLeft.args = { ...DefaultPoint.args, gridX: 0, gridY: 0 };

export const CornerTopRight = Template.bind({});
CornerTopRight.args = { ...DefaultPoint.args, gridX: 8, gridY: 0 };

export const CornerBottomLeft = Template.bind({});
CornerBottomLeft.args = { ...DefaultPoint.args, gridX: 0, gridY: 8 };

export const CornerBottomRight = Template.bind({});
CornerBottomRight.args = { ...DefaultPoint.args, gridX: 8, gridY: 8 };

export const EdgeTop = Template.bind({});
EdgeTop.args = { ...DefaultPoint.args, gridX: 1, gridY: 0 };

export const EdgeBottom = Template.bind({});
EdgeBottom.args = { ...DefaultPoint.args, gridX: 1, gridY: 8 };

export const EdgeLeft = Template.bind({});
EdgeLeft.args = { ...DefaultPoint.args, gridX: 0, gridY: 1 };

export const EdgeRight = Template.bind({});
EdgeRight.args = { ...DefaultPoint.args, gridX: 8, gridY: 1 };

const styles = {
  testList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    width: '100px',
    height: '100px',
    backgroundColor: '#c58f63',
    display: 'grid'
  }
};
