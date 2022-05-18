import { ComponentMeta, Story } from '@storybook/react';
import Board, { newBoardData, BoardProps } from './Board';

export default {
  title: "Board",
  argTypes: {
    boardSize: {
      control: false
    },
    displayContents: { 
      control: 'radio', 
      options: ['Empty With Grid', 'Random Stones', 'Blank'],
    }
  },
  args: {
    displayContents: 'Empty With Grid',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  }
} as ComponentMeta<typeof Board>;

// Type that adds custom args for story controls
interface BoardStoryProps extends BoardProps {
  displayContents: string
}

const Template: Story<BoardStoryProps> = ({boardData, displayContents, ...otherArgs}) => {
  const displayStones: boolean = (displayContents === 'Random Stones' ? true : false );
  return (
    <Board boardData={newBoardData(otherArgs.boardSize, displayStones)} {...otherArgs} />
  );
};

export const Board9x9 = Template.bind({});
Board9x9.args = { boardSize: 9, turn: false };

export const Board13x13 = Template.bind({});
Board13x13.args = { ...Board9x9.args, boardSize: 13 };

export const Board19x19 = Template.bind({});
Board19x19.args = { ...Board9x9.args, boardSize: 19 };
