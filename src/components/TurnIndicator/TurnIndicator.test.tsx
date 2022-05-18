import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TurnIndicator from './TurnIndicator';
import { newPlayer } from 'services/player';
import { StoneType } from 'components/Stone/Stone';

describe('<TurnIndicator />', () => {
  test('it should mount', () => {

    const testPlayers = [
      newPlayer('Player 1', StoneType.Black), 
      newPlayer('Player 2', StoneType.White)
    ];

    render(<TurnIndicator turn={false} players={testPlayers} />);
    
    const turnIndicator = screen.getByTestId('TurnIndicator');

    expect(turnIndicator).toBeInTheDocument();
  });
});