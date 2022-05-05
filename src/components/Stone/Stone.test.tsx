import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stone from './Stone';

describe('<Stone />', () => {
  test('it should mount', () => {
    render(<Stone />);
    
    const stone = screen.getByTestId('Stone');

    expect(stone).toBeInTheDocument();
  });
});