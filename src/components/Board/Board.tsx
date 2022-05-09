import React, {useState} from 'react';
import styles from './Board.module.css';
import Point from '../../components/Point/Point';
import BoardRow from '../BoardRow/BoardRow';

interface BoardProps {
  boardSize: number
}

/**
 * The square game board, made up of intersecting Points.
 * The grid can be different sizes: 19x19, 13x13, and 9x9 are standard.
 */
const Board = ({boardSize = 9}: BoardProps) => {
  const [boardData] = useState<number[][]>(
    [...Array(boardSize)].map(x=>Array(boardSize).fill(0))
  );

  /**
   * Render all points of the board, within rows.
   */
  const renderPoints = boardData.map((row, x) => {
    const rowPoints = row.map((cellValue, y) => {
      return <Point stoneType={cellValue} boardSize={boardSize} gridX={x} gridY={y} key={y} />
    });

    return (
      <BoardRow boardSize={boardSize} rowIndex={x} key={x}>{rowPoints}</BoardRow>
    );
  });

  return (
    <ol
      className={styles[`size-${boardSize}x${boardSize}`]} 
      data-testid="Board"
      role="grid"
      aria-colcount={boardSize}
      aria-label={`Game Board: ${boardSize} by ${boardSize}`}
    >
      {renderPoints}
    </ol>
  );
};

export default Board;
