/**
 * Parse pathname into its slugs
 * @param  {string} pathname
 */
export function getSlugs(pathname) {
	return pathname.split('/');
}
