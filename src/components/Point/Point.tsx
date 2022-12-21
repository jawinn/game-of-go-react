import React from 'react';
import styles from './Point.module.css';
import Stone, { StoneType } from 'components/Stone/Stone';
import { isStarPoint } from 'services/starPoints';

/**
 * Get class names for the Point's parent HTML element.
 */
export const getPointClassNames = (boardSize: number, gridX: number, gridY: number): string => {
  let classNames: string[] = [styles.default];

  // Points at the edge of the board.
  if (gridY === 0){
    classNames.push(styles.top);
  } else if (gridY === boardSize - 1){
    classNames.push(styles.bottom);
  }

  if (gridX === 0){
    classNames.push(styles.left);
  } else if (gridX === boardSize - 1){
    classNames.push(styles.right);
  }

  // Star points (dots appearing on certain grid line intersections).
  if (isStarPoint(boardSize, gridX, gridY)){
    classNames.push(styles.star);
  }

  return classNames.join(' ');
};

/**
 * Handles when a grid point is clicked, i.e. when placing a stone there.
 */
export type PointClickHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  gridX: number,
  gridY: number
) => void;

interface PointProps {
  stoneType?: number,
  boardSize: number,
  gridX: number,
  gridY: number,
  turn: boolean,
  onClickPoint?: PointClickHandler
}

/**
 * Intersecting point on the board, where stones are placed.
 * 
 * The center of a Point is actually where the two grid lines intersect.
 * The points on the edges and corners are styled to hide the parts of 
 * the grid lines that do not appear.
 */
const Point = ({stoneType = 0, boardSize, gridX, gridY, turn, onClickPoint}: PointProps) => (
  <li 
    className={getPointClassNames(boardSize, gridX, gridY)} 
    data-testid={'Point'} 
    role="gridcell" 
    data-x={gridX} 
    data-y={gridY}
  >
    <button 
      type="button" 
      className={ !turn ? styles.btnBlackTurn : styles.btnWhiteTurn }
      aria-label={`Point (${gridX + 1},${gridY + 1})`}
      disabled={stoneType !== StoneType.Empty}
      onClick={onClickPoint !== undefined ? (e) => onClickPoint(e, gridX, gridY) : undefined}
    >
      { stoneType !== StoneType.Empty && <Stone stoneType={stoneType} /> }
    </button>
  </li>
);

export default Point;
