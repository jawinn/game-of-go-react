import { Meta } from '@storybook/react';
import Point from './Point';

export default {
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
} as Meta<typeof Point>;

export const DefaultPoint = {
  args: {
    gridX: 1,
    gridY: 1,
    boardSize: 9,
    turn: false
  }
};

export const StarPoint = {
  args: {
    ...DefaultPoint.args,
    gridX: 4,
    gridY: 4,
  }
};

export const CornerTopLeft = {
  args: {
    ...DefaultPoint.args,
    gridX: 0,
    gridY: 0
  }
}

export const EdgeBottom = {
  args: {
    ...DefaultPoint.args,
    gridX: 1,
    gridY: 8
  }
}

export const EdgeRight = {
  args: {
    ...DefaultPoint.args,
    gridX: 8,
    gridY: 1
  }
}

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
