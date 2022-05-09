import React from 'react';
import styles from './BoardRow.module.css';

interface BoardRowProps {
  rowIndex: number,
  boardSize: number,
  children?: React.ReactNode
}

const BoardRow = ({ rowIndex, boardSize = 9, children = '' }: BoardRowProps) => (
  <li 
    className={styles[`size-${boardSize}x${boardSize}`]} 
    data-testid="BoardRow"
    data-row={rowIndex}
    role="row"
  >
    <ol>
      {children}
    </ol>
  </li>
);

export default BoardRow;
