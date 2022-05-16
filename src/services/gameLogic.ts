import { StoneType } from 'components/Stone/Stone'

/**
 * Whether the player can place a stone at the specified point, based on the contents of the board.
 * Assumes game is currently being played (no one has resigned).
 */
export const canPlaceStone = (boardData: StoneType[][], stone: StoneType, gridX: number, gridY: number) => {
	const stoneAtPoint: StoneType = boardData[gridX][gridY];

	// Cannot place where a stone already exists.
	if (stoneAtPoint !== StoneType.Empty){
		return false;
	}

	// TODO: 
	// Additional logic based on surrounding pieces and game rules.

	return true;
}