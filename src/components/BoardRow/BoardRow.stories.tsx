/* eslint-disable */
import BoardRow from './BoardRow';

export default {
  title: "BoardRow",
};

export const Default = () => <BoardRow boardSize={9} rowIndex={0} />;

Default.story = {
  name: 'default',
};
