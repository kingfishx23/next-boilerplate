/**
 * Replaces all special chars, spaces, and transform to lower string
 * @param {String} string string
 */
export function unamize(string) {
	return string
		.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gi, '_')
		.toLowerCase();
}
