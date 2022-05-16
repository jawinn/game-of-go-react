import React, { useState, MouseEvent } from 'react';
import './Game.css';
import Board, { newBoardData } from 'components/Board/Board';
import { StoneType } from 'components/Stone/Stone';
import { PointClickHandler } from 'components/Point/Point';
import { canPlaceStone } from 'services/gameLogic';

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
  const [gamePhase] = useState<GamePhase>(GamePhase.ChooseBoard);
  const [turn, setTurn] = useState<boolean>(false);
  const [boardSize] = useState<number>(9);
  const [boardData, setBoardData] = useState<StoneType[][]>(newBoardData(boardSize, true));

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

  return (
    <div className="game">
      <Board 
        boardSize={boardSize} 
        boardData={boardData} 
        handleClickPoint={handleClickPoint} 
      />
    </div>
  );
}

export default Game;
