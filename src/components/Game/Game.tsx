import React, { useState, MouseEvent } from 'react';
import styles from './Game.module.css';
import Board, { newBoardData } from 'components/Board/Board';
import TurnIndicator from 'components/TurnIndicator/TurnIndicator';
import { StoneType } from 'components/Stone/Stone';
import { PointClickHandler } from 'components/Point/Point';
import { canPlaceStone } from 'services/gameLogic';
import { IPlayer, newPlayer } from 'services/player';

export enum GamePhase {
  ChooseBoard,
  ChooseOptions,
  PlayingGame,
  GameOver
}

/**
 * Main Game (App)
 */
function Game() {
  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.ChooseBoard);
  const [turn, setTurn] = useState<boolean>(false);
  const [boardSize, setBoardSize] = useState<number>(0);
  const [boardData, setBoardData] = useState<StoneType[][]>(newBoardData(boardSize));
  const [players] = useState<IPlayer[]>(
    [
      newPlayer('Player 1'), 
      newPlayer('Player 2')
    ]
  );

  const startGame = (newBoardSize: number) => {
    setBoardSize(newBoardSize);
    setBoardData(newBoardData(newBoardSize));
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
  const handleClickPoint: PointClickHandler = (e: MouseEvent<HTMLButtonElement>, gridX: number, gridY: number): void => {
    e.preventDefault();
    const currentPlayerStone = (!turn ? StoneType.Black : StoneType.White);

    if (e.currentTarget.disabled){ return; } 
    // TODO: Is current player's turn
    // TODO: In PlayingGame phase.
    if (!canPlaceStone(boardData, currentPlayerStone, gridX, gridY)){ return; }

    changeStone(gridX, gridY, currentPlayerStone);
    setTurn(!turn);
  }

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
                Version: 0.1 &mdash; <em className={styles.status}>Not yet fully playable</em>
              </p>
            </header>

            <article className={styles.content}>
              <fieldset>
                <legend>Choose a Board Size</legend>
                <div className={styles.radioGrid}>
                  <div className={styles.radioGridItem}>
                    <input type="radio" value="9" id="boardSize-9" name="boardSize" onChange={(e) => setBoardSize(parseInt(e.target.value))} />
                    <label htmlFor="boardSize-9">
                      <div className={styles.itemHeading}>9 x 9</div>
                      <div className={styles.itemSubheading}>Practice</div>
                    </label>
                  </div>
                  <div className={styles.radioGridItem}>
                    <input type="radio" value="13" id="boardSize-13" name="boardSize" onChange={(e) => setBoardSize(parseInt(e.target.value))} />
                    <label htmlFor="boardSize-13">
                      <div className={styles.itemHeading}>13 x 13</div>
                      <div className={styles.itemSubheading}>Practice</div>
                    </label>
                  </div>
                  <div className={styles.radioGridItem}>
                    <input type="radio" value="19" id="boardSize-19" name="boardSize" onChange={(e) => setBoardSize(parseInt(e.target.value))} />
                    <label htmlFor="boardSize-19">
                      <div className={styles.itemHeading}>19 x 19</div>
                      <div className={styles.itemSubheading}>Standard</div>
                    </label>
                  </div>
                </div>
              </fieldset>

              <p>
                <button type="button" disabled={!boardSize}>Start Game</button>
              </p>
            </article>
          </>
        );
    }
  }

  return (
    <main className={styles.game} data-testid="Game">
      {renderGamePhase(gamePhase)}
    </main>
  );
}

export default Game;
