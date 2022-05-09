import React from 'react';
import styles from './Point.module.css';
import Stone from '../Stone/Stone';

interface PointProps {
  stoneType?: number,
  boardSize?: number,
  gridX: number,
  gridY: number
}

/**
 * Get class names for the point element; special classes are used for points 
 * on the edges of the board, and for star/dot markers.
 */
const getPointClass = (boardSize: number, gridX: number, gridY: number) => {
  let classNames: string[] = [styles.default];

  if (gridX === 0){
    classNames.push(styles.top);
  } else if (gridX === boardSize - 1) {
    classNames.push(styles.bottom);
  }

  if (gridY === 0){
    classNames.push(styles.left);
  } else if (gridY === boardSize - 1) {
    classNames.push(styles.right);
  }

  return classNames.join(' ');
};

/**
 * Intersecting point on the board, where stones are placed.
 */
const Point = ({stoneType = 0, boardSize = 9, gridX, gridY}: PointProps) => (
  <li className={getPointClass(boardSize, gridX, gridY)} data-testid={'Point'} role="gridcell">
    <button 
      type="button" 
      aria-label={`Point (${gridX+1},${gridY+1})`}
    >
      {stoneType > 0 && <Stone isWhite={Boolean(stoneType === 2)} />}
    </button>
  </li>
);

export default Point;
