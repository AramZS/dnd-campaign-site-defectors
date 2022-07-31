// Adopted from https://github.com/GoogleChrome/web.dev/pull/1970/files

module.exports = (
	md,
	options = {
		divClass: false,
		addDivClass: true,
		customHTMLOpener: false,
		customHTMLCloser: false,
		style: false,
	}
) => {
	let divClass = `table-wrapper`;
	let styleAdded = "";
	if (options.addDivClass) {
		divClass += " " + options.divClass;
	} else {
		divClass = options.divClass;
	}
	if (options.style === true) {
		styleAdded = `overflow-x: auto; display: block; white-space: nowrap;`;
	} else if (options.style) {
		styleAdded = style;
	}
	let customHTMLOpener = options.customHTMLOpener
		? options.customHTMLOpener
		: `<div class="${divClass}" style="${styleAdded}">`;
	let customHTMLCloser = options.customHTMLCloser
		? options.customHTMLCloser
		: "</div>";
	// let classSelectregexValue = /(?:class|className)=(?:["']\W+\s*(?:\w+)\()?["']([^'"]+)['"]/gmi;
	// let finalHTMLOpener = customHTMLOpener.replace(classSelectregexValue, `class="${options.divClass}"`)
	const rules = {
		table_close: () => `</table>\n${customHTMLCloser}`,
		table_open: () => `${customHTMLOpener}\n<table>\n`,
	};
	md.renderer.rules = { ...md.renderer.rules, ...rules };
};
