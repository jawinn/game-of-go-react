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

export interface BoardProps {
  boardSize: number,
  boardData: StoneType[][],
  turn: boolean,
  handleClickPoint?: PointClickHandler
}

/**
 * The square game board, made up of intersecting Points.
 * The grid can be different sizes: 19x19, 13x13, and 9x9 are standard.
 */
const Board = ({boardSize = 9, boardData, turn = false, handleClickPoint}: BoardProps) => {
  // Rows containing all Points.
  let boardRows: JSX.Element[] = [];

  for (let y = 0; y < boardSize; y++) {
    // Create Points within each row.
    let points: JSX.Element[] = [];
    for (let x = 0; x < boardSize; x++) {
      points.push(
        <Point 
          stoneType={boardData[x][y]} 
          boardSize={boardSize} 
          gridX={x}
          gridY={y}
          key={y}
          onClickPoint={handleClickPoint} 
          turn={turn}
        />
      );
    };
    // Create row.
    boardRows.push(
      <BoardRow boardSize={boardSize} rowIndex={y} key={y}>{points}</BoardRow>
    );
  }

  return (
    <main className={styles.boardScroller}>
      <ol
        className={styles[`size-${boardSize}x${boardSize}`]} 
        data-testid="Board"
        role="grid"
        aria-colcount={boardSize}
        aria-label={`Game Board: ${boardSize} by ${boardSize}`}
      >
        {boardRows}
      </ol>
    </main>
  );
};

export default Board;
