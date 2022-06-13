import { newPlayer } from '../player';

describe('newPlayer constructor', () => {

	test('Player name and captured stones are set', () => {
		const player = newPlayer("Test Name", 5);
		expect(player.playerName).toEqual('Test Name');
		expect(player.capturedStones).toEqual(5);
	});

});