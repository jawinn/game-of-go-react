import { StoryObj, Meta } from '@storybook/react';
import BoardRow from './BoardRow';

export default {
  component: BoardRow,
  argTypes: {
    boardSize: {
      control: 'select',
      options: [9, 13, 19]
    },
  },
  decorators: [
    (Story) => (
      <ol style={styles.testList}>
        <Story />
      </ol>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
  }
} as Meta<typeof BoardRow>;

const Default: StoryObj<typeof BoardRow> = {
  render: (args) => (
    <BoardRow {...args} key={args.rowIndex}>
      {[...Array(args.boardSize)].map(
        (el, index) => (<div style={styles.testGridItem} key={index} />)
      )}
    </BoardRow>
  )
};

export const Row19Column = {
  ...Default,
  args: {
    boardSize: 19,
    rowIndex: 0
  }
};

export const Row13Column = {
  ...Default,
  args: {
    boardSize: 13,
    rowIndex: 1
  }
};

export const Row9Column = {
  ...Default,
  args: {
    boardSize: 9,
    rowIndex: 8
  }
}

const styles = {
  testList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    display: 'grid'
  },
  testGridItem: {
    backgroundColor: '#d7d7d7',
    minWidth: '25px',
    minHeight: '25px',
    outline: '2px solid #999999',
    aspectRatio: '1'
  }
};
