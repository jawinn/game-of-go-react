/* eslint-disable */
import TurnIndicator from './TurnIndicator';
import { newPlayer } from 'services/player';
import { StoneType } from 'components/Stone/Stone';

export default {
  title: "TurnIndicator",
};

const testPlayers = [
  newPlayer('Player 1', StoneType.Black), 
  newPlayer('Player 2', StoneType.White)
];

export const Player1Turn = () => <TurnIndicator turn={false} players={testPlayers} />;
Player1Turn.storyName = 'Player 1 Turn';

export const Player2Turn = () => <TurnIndicator turn={true} players={testPlayers} />;
Player2Turn.storyName = 'Player 2 Turn';