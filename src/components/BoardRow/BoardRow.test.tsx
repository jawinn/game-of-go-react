import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoardRow from './BoardRow';

describe('<BoardRow />', () => {
  test('it should mount', () => {
    render(<BoardRow boardSize={9} rowIndex={0} />);
    
    const boardRow = screen.getByTestId('BoardRow');

    expect(boardRow).toBeInTheDocument();
  });
});