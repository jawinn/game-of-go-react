import React from 'react';
import styles from './Stone.module.css';

interface StoneProps {
  isWhite?: boolean
}

/**
 * Stone: The playing piece in the game. Is either black or white.
 */
const Stone = ({isWhite = false}: StoneProps) => (
  <figure className={styles.Stone} data-testid="Stone"></figure>
);

export default Stone;
