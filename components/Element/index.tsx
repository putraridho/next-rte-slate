import { RenderElementProps } from "slate-react";

export function Element({
	attributes,
	children,
	element,
}: RenderElementProps): React.ReactElement {
	switch (element.type) {
		case "h1":
			return <h1 {...attributes}>{children}</h1>;
		case "h2":
			return <h2 {...attributes}>{children}</h2>;
		case "h3":
			return <h3 {...attributes}>{children}</h3>;
		default:
			return <p {...attributes}>{children}</p>;
	}
}
