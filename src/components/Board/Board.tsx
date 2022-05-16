import React from 'react';
import styles from './Board.module.css';
import Point, { PointClickHandler } from 'components/Point/Point';
import BoardRow from 'components/BoardRow/BoardRow';
import { StoneType } from 'components/Stone/Stone'
import { getRandomInt } from 'utils/genericHelpers';

/**
 * New empty game board data. Or random board data for testing.
 */
export const newBoardData = (boardSize:number, randomFill:boolean = false): StoneType[][] => {
  if (!randomFill){
    return [...Array(boardSize)]
      .map(() => Array(boardSize).fill(StoneType.Empty));
  } else {
    return [...Array(boardSize)]
      .map(() => Array(boardSize).fill(StoneType.Empty)
      .map(() => getRandomInt(0,2)));
  }
};

interface BoardProps {
  boardSize: number,
  boardData: StoneType[][],
  handleClickPoint?: PointClickHandler
}

/**
 * The square game board, made up of intersecting Points.
 * The grid can be different sizes: 19x19, 13x13, and 9x9 are standard.
 */
const Board = ({boardSize = 9, boardData, handleClickPoint}: BoardProps) => {
  // Render all points of the board, within rows.
  const renderPoints = boardData.map((row, x) => {
    const rowPoints = row.map((cellValue, y) => {
      return <Point 
        stoneType={cellValue} 
        boardSize={boardSize} 
        gridX={x} 
        gridY={y} 
        key={y} 
        onClickPoint={handleClickPoint} 
      />
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
