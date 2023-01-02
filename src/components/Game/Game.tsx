import React, { useState, MouseEvent } from 'react';
import styles from './Game.module.css';
import Board, { newBoardData } from 'components/Board/Board';
import TurnIndicator from 'components/TurnIndicator/TurnIndicator';
import { StoneType } from 'components/Stone/Stone';
import { PointClickHandler } from 'components/Point/Point';
import { canPlaceStone } from 'services/gameLogic';
import { IPlayer, newPlayer } from 'services/player';

/**
 * Phases / stages of gameplay.
 */
export enum GamePhase {
  ChooseBoard,
  ChooseOptions,
  PlayingGame,
  GameOver
}

/**
 * Available board sizes.
 */
export const boardSizeOptions = [19, 13, 9] as const;
export type BoardSizeOption = typeof boardSizeOptions[number];

/**
 * Main Game (App).
 */
function Game() {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.ChooseBoard);
  const [turn, setTurn] = useState<boolean>(false);
  const [boardSize, setBoardSize] = useState<BoardSizeOption>(19);
  const [boardData, setBoardData] = useState<StoneType[][]>(newBoardData(boardSize));
  const [players] = useState<IPlayer[]>(
    [
      newPlayer('Player 1'), 
      newPlayer('Player 2')
    ]
  );

  /**
   * Start game with currently selected board size.
   */
  const startGame = () => {
    setBoardData(newBoardData(boardSize));
    setGamePhase(GamePhase.PlayingGame);
  };

  /**
   * Place or remove a stone; change the StoneType at a single point on the board.
   */
  const changeStone = (gridX: number, gridY: number, stone: StoneType) => {
    const newBoardData: StoneType[][] = [...boardData];
    newBoardData[gridX][gridY] = stone;
    setBoardData(newBoardData);
  }

  /**
   * Player clicked a point on the board; try to place a stone.
   */
  const handleClickPoint: PointClickHandler = (
    e: MouseEvent<HTMLButtonElement>,
    gridX: number,
    gridY: number
  ): void => {
    e.preventDefault();

    // Check if stone can be placed:
    if (gamePhase !== GamePhase.PlayingGame || e.currentTarget.disabled){
      return;
    }
    const currentPlayerStone = (!turn ? StoneType.Black : StoneType.White);
    if (!canPlaceStone(boardData, currentPlayerStone, gridX, gridY)){
      return;
    }

    // Place stone, and end current player's turn.
    changeStone(gridX, gridY, currentPlayerStone);
    setTurn(!turn);
  };

  /**
   * Render main game contents, based on current phase of game.
   */
  const renderGamePhase = (phase: GamePhase): React.ReactElement | null => {
    switch (phase) {
      case GamePhase.PlayingGame:
        return (
          <>
            <TurnIndicator turn={turn} players={players} />
            <Board 
              boardSize={boardSize} 
              boardData={boardData} 
              handleClickPoint={handleClickPoint} 
              turn={turn} />
          </>
        );

      case GamePhase.ChooseBoard:
      default:
        return (
          <>
            <header className={styles.gameIntro}>
              <h1 className={styles.title}>
                <small>The Game of</small> Go
              </h1>
              <p className={styles.subtitle}>
                Version: 0.1.1 &mdash; <em className={styles.status}>Not yet fully playable</em>
              </p>
            </header>

            <article className={styles.content}>
              <fieldset>
                <legend>Choose a Board Size</legend>
                <div className={styles.radioGrid}>
                  {boardSizeOptions.map((size) => (
                    <div
                      className={boardSize === size ? styles.radioGridItemSelected : styles.radioGridItem}
                      key={size}
                      onClick={(e) => setBoardSize(size)}
                    >
                      <label htmlFor={`boardSize-${size}`}>
                        <div className={styles.itemHeading}>
                          {size}&nbsp;<span className={styles.by}><span aria-hidden="true">x</span><span className='screen-reader-text'>by</span></span>&nbsp;{size}
                        </div>
                        <div className={styles.itemSubheading}>{ size === 19 ? 'Standard' : 'Practice' }</div>
                      </label>
                      <input
                        checked={boardSize === size}
                        type="radio"
                        value={size}
                        id={`boardSize-${size}`}
                        name="boardSize"
                        onChange={(e) => setBoardSize(size)}
                        className={styles.radioInput}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>

              <p>
                <button type="button" className={styles.button} onClick={() => startGame()}>Start Game</button>
              </p>
            </article>
          </>
        );
    }
  };

  return (
    <main className={styles.game} data-testid="Game">
      {renderGamePhase(gamePhase)}
    </main>
  );
}

export default Game;
