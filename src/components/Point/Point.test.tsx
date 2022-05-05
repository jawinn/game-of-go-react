import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Point from './Point';

describe('<Point />', () => {
  test('it should mount', () => {
    render(<Point />);
    
    const point = screen.getByTestId('Point');

    expect(point).toBeInTheDocument();
  });
});