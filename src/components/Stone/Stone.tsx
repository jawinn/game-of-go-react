import React from 'react';
import styles from './Stone.module.css';

export enum StoneType {
  Empty = 0,
  Black = 1,
  White = 2
}

interface StoneProps {
  stoneType?: StoneType
}

/**
 * Stone: The playing piece in the game. Is either black or white.
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
