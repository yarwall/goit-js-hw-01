// TASK#3

function getElementWidth(content, padding, border) {
	const contenT = Number.parseFloat(content);
	const paddinG = Number.parseFloat(padding);
	const bordeR = Number.parseFloat(border);
	const sumAllElem = contenT + 2 * paddinG + 2 * bordeR;
	return sumAllElem;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));