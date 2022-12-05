/**
 * Open New Tab, with safety measures
 * @param  {string} url
 */
export function openNewTab(url) {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
}
