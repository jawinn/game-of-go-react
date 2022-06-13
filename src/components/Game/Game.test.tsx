import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders learn react link', () => {
  render(<Game />);
  const gameWrap = screen.getByTestId('Game');
  expect(gameWrap).toBeInTheDocument();
});
