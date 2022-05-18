import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board, { newBoardData } from './Board';

describe('<Board />', () => {
  test('it should mount', () => {
    render(<Board boardSize={9} boardData={newBoardData(9, true)} turn={false} />);
    
    const board = screen.getByTestId('Board');

    expect(board).toBeInTheDocument();
  });
});