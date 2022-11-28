import { RenderLeafProps } from "slate-react";

export function Leaf({ attributes, children, leaf }: RenderLeafProps) {
	const properties = Object.keys(leaf);
	let child = children;

	let props = {
		...attributes,
	} as typeof attributes & { style: { [key: string]: unknown } };

	if (leaf.color) {
		props.style = {};
		props.style.color = leaf.color;
	}

	properties.forEach((key) => {
		switch (key) {
			case "bold":
				child = <b>{child}</b>;
				break;
			case "italic":
				child = <i>{child}</i>;
				break;
			case "underline":
				child = <u>{child}</u>;
				break;
			case "code":
				child = <code>{child}</code>;
				break;
		}
	});

	return <span {...props}>{child}</span>;
}
