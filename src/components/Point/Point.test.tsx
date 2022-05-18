import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Point from './Point';

describe('<Point />', () => {
  test('it should mount', () => {
    render(<Point gridX={0} gridY={0} boardSize={9} turn={false} />);
    
    const point = screen.getByTestId('Point');

    expect(point).toBeInTheDocument();
  });
});