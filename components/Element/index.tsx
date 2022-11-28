import { RenderElementProps } from "slate-react";

export function Element({
	attributes,
	children,
	element,
}: RenderElementProps): React.ReactElement {
	let props = {
		...attributes,
	} as typeof attributes & { style?: { [key: string]: unknown } };

	if (element.align) {
		if (!props.style) {
			props.style = {};
		}
		props.style.textAlign = element.align;
	}

	if (element.fontFamily) {
		if (!props.style) {
			props.style = {};
		}

		switch (element.fontFamily) {
			case "mono":
				props.style.fontFamily = "monospace";
				break;
			case "serif":
				props.style.fontFamily = "serif";
				break;
			case "sans":
				props.style.fontFamily = "sans-serif";
				break;
			default:
				props.style.fontFamily = undefined;
		}
	}

	switch (element.type) {
		case "h1":
			return <h1 {...props}>{children}</h1>;
		case "h2":
			return <h2 {...props}>{children}</h2>;
		case "h3":
			return <h3 {...props}>{children}</h3>;
		case "bulleted-list":
			return <ul {...props}>{children}</ul>;
		case "numbered-list":
			return <ol {...props}>{children}</ol>;
		case "list-item":
			return <li {...props}>{children}</li>;
		default:
			return <p {...props}>{children}</p>;
	}
}
