/**
 * delete queries from pathname
 * @param  {string} pathname pathname
 */
export function delQuery(asPath) {
	return asPath.split('?')[0];
}
