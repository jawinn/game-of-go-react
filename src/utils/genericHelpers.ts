/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 */
export function getRandomInt(min: number, max: number){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Return a truncated string. If over maxLength, `suffix` will be added at the end.
 */
export function truncateString(str: string, maxLength: number, suffix: string = '…'){
	return str.length > maxLength ? str.substring(0, maxLength) + suffix : str;
}