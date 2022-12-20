import TurnIndicator from './TurnIndicator';
import { newPlayer } from 'services/player';
import { StoneType } from 'components/Stone/Stone';

export default {
  component: TurnIndicator
};

const testPlayers = [
  newPlayer('Player 1', StoneType.Black), 
  newPlayer('Player 2', StoneType.White)
];

export const Player1Turn = {
  args: {
    turn: false,
    players: testPlayers
  },
  name: 'Player 1 Turn'
};

export const Player2Turn = {
  args: {
    turn: true,
    players: testPlayers
  },
  name: 'Player 2 Turn'
};
