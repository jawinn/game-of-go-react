import React from 'react';
import styles from './Point.module.css';
import Stone from '../Stone/Stone';

interface PointProps {
  playerStone?: number,
  boardSize?: number
}

const getPointClass = (gridSize: number) => {
  return styles[`point-${gridSize.toString()}x${gridSize.toString()}`];
};

/**
 * Intersecting point on the board, where stones are placed.
 */
const Point = ({boardSize = 9, playerStone = 0}: PointProps) => (
  <li className={getPointClass(boardSize)} data-testid="Point"><button type="button"></button></li>
);

export default Point;
