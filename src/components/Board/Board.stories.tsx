/* eslint-disable */
import Board, { newBoardData } from './Board';

export default {
  title: "Board",
};

export const Default = () => <Board boardSize={9} boardData={newBoardData(9, true)} />;

Default.story = {
  name: 'default',
};
