import React, {useState} from 'react';
import styles from './Board.module.css';
import Point from '../../components/Point/Point';

interface BoardProps {
  boardSize: number
}

/**
 * The square game board, made up of intersecting Points.
 * The grid can be different sizes: 19x19, 13x13, and 9x9 are standard.
 */
const Board = (props: BoardProps) => {
  const [boardSize, setBoardSize] = useState(9);
  const [boardData, setBoardData] = useState(Array(boardSize * boardSize).fill(0));

  const renderPoints = boardData.map((point, index) => {
    return <Point playerStone={0} boardSize={boardSize} key={index} />
  });

  return (
    <ol className={styles.board} data-testid="Board">
      {renderPoints}
    </ol>
  );
};

export default Board;
