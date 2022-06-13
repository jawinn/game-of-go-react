import { truncateString } from 'utils/genericHelpers';

export interface IPlayer {
	playerName: string,
	capturedStones: number
}

/**
 * Create a new Player object.
 */
export const newPlayer = (name: string, captured: number = 0): IPlayer => {
	return {
		playerName: truncateString(name, 128),
		capturedStones: Math.max(captured, 0)
	};
};