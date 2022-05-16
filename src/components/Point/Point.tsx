import React from 'react';
import styles from './Point.module.css';
import Stone, { StoneType } from 'components/Stone/Stone';
import { isStarPoint } from 'services/starPoints';

const getPointClassNames = (boardSize: number, gridX: number, gridY: number) => {
  let classNames: string[] = [styles.default];

  // Points at the edge of the board.
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

  // Star points (dots).
  if (isStarPoint(boardSize, gridX, gridY)){
    classNames.push(styles.star);
  }
  
  return classNames.join(' ');
};

export type PointClickHandler = (e: React.MouseEvent<HTMLButtonElement>, gridX: number, gridY: number) => void;

interface PointProps {
  stoneType?: number,
  boardSize?: number,
  gridX: number,
  gridY: number,
  onClickPoint?: PointClickHandler
}

/**
 * Intersecting point on the board, where stones are placed.
 */
const Point = ({stoneType = 0, boardSize = 9, gridX, gridY, onClickPoint}: PointProps) => (
  <li 
    className={getPointClassNames(boardSize, gridX, gridY)} 
    data-testid={'Point'} 
    role="gridcell" 
    data-x={gridX} 
    data-y={gridY}
  >
    <button 
      type="button" 
      aria-label={`Point (${gridX+1},${gridY+1})`}
      disabled={stoneType !== StoneType.Empty}
      onClick={onClickPoint !== undefined ? (e) => onClickPoint(e, gridX, gridY) : undefined}
    >
      { stoneType !== StoneType.Empty && <Stone stoneType={stoneType} /> }
    </button>
  </li>
);

export default Point;
