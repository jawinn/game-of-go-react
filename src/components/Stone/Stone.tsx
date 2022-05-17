import React from 'react';
import styles from './Stone.module.css';

export enum StoneType {
  Empty = 0,
  Black = 1,
  White = 2
}

export interface StoneProps {
  stoneType?: StoneType
}

/**
 * The playing pieces in the game. Stones are either black or white. The component does not render anything with the Empty StoneType.
 */
const Stone = ({stoneType = StoneType.Empty}: StoneProps) => {
  if (stoneType === StoneType.Empty){
    return null;
  }
  return (
    <figure className={stoneType === StoneType.Black ? styles.default : styles.white} data-testid="Stone"></figure>
  );
};

export default Stone;
