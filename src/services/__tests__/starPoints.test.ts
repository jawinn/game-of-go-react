import { boardStarPoints, isStarPoint } from '../starPoints';

describe('boardStarPoints data', () => {
	test('star point data should be an array that is not empty', () => {
		expect(boardStarPoints).toBeInstanceOf(Array);
		expect(boardStarPoints.length).toBeGreaterThan(0);
	});
	
	test('Elements in star point data have expected values', () => {
		boardStarPoints.forEach((sp) => {
			expect(sp.boardSize).toBeGreaterThan(0);
			expect(sp.boardSize).toBeLessThan(50);
			expect(sp.boardSize % 2).toEqual(1); // Is an odd number
			expect(sp.stars).toBeInstanceOf(Array);
			expect(sp.stars.length).toBeGreaterThan(0);
		});
	});
});

describe('isStarPoint function', () => {
	test('isStarPoint: Star point should be at center of all boards', () => {
		boardStarPoints.forEach((sp) => {
			const centerIndex = Math.floor(sp.boardSize / 2);
			expect(isStarPoint(sp.boardSize, centerIndex, centerIndex)).toEqual(true);
		});
	});
	
	test('isStarPoint: Check that some expected star points exist', () => {
		// Top left corner point on 19x19
		const board19 = boardStarPoints.find((sp) => { return sp.boardSize === 19 });
		expect(board19).not.toEqual(undefined);
		expect(board19?.stars?.some((point) => point[0] === 4 && point[1] === 4)).toEqual(true);
		expect(board19?.stars?.some((point) => point[0] === 3 && point[1] === 3)).toEqual(false);
		
		// Bottom right corner point on 13x13
		const board13 = boardStarPoints.find((sp) => { return sp.boardSize === 13 });
		expect(board13).not.toEqual(undefined);
		expect(board13?.stars?.some((point) => point[0] === 10 && point[1] === 10)).toEqual(true);
		expect(board13?.stars?.some((point) => point[0] === 9 && point[1] === 9)).toEqual(false);
	
		// Bottom left corner point on 9x9
		const board9 = boardStarPoints.find((sp) => { return sp.boardSize === 9 });
		expect(board9).not.toEqual(undefined);
		expect(board9?.stars?.some((point) => point[0] === 3 && point[1] === 7)).toEqual(true);
		expect(board9?.stars?.some((point) => point[0] === 2 && point[1] === 6)).toEqual(false);
	});
});
