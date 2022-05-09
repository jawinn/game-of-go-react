import React from 'react';
import styles from './Point.module.css';
import Stone from '../Stone/Stone';

interface PointProps {
  stoneType?: number,
  boardSize?: number,
  gridX: number,
  gridY: number
}

interface StarPoints {
  boardSize: number,
  stars: number[][]
}

/**
 * Location of star points (dots), based on game-based grid starting value of 1.
 */
const boardStarPoints: StarPoints[] = [
  {
    boardSize: 9,
    stars: [[3,3], [3,7], [5,5], [7,7], [7,3]]
  },
  {
    boardSize: 13,
    stars: [[4,4], [4,7], [4,10], [7,4], [7,7], [7,10], [10,4], [10,7], [10,10]]
  },
  {
    boardSize: 19,
    stars: [[4,4], [4,10], [4,16], [10,4], [10,10], [10,16], [16,4], [16,10], [16,16]]
  },
];

/**
 * Get class names for the point element; special classes are used for points 
 * on the edges of the board, and for star/dot markers.
 */
const getPointClass = (boardSize: number, gridX: number, gridY: number) => {
  let classNames: string[] = [styles.default];

  if (gridX === 0){
    classNames.push(styles.top);
  } else if (gridX === boardSize - 1){
    classNames.push(styles.bottom);
  }

  if (gridY === 0){
    classNames.push(styles.left);
  } else if (gridY === boardSize - 1){
    classNames.push(styles.right);
  }

  let starPoints: StarPoints | undefined = boardStarPoints.find(point => point.boardSize === boardSize);
  if (starPoints !== undefined){
    starPoints.stars.forEach(point => {
      if (point[0] === gridX + 1 && point[1] === gridY + 1){
        classNames.push(styles.star);
      }
    });
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
