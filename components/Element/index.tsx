import { RenderElementProps } from "slate-react";

export function Element({
	attributes,
	children,
}: RenderElementProps): React.ReactElement {
	return <p {...attributes}>{children}</p>;
}
