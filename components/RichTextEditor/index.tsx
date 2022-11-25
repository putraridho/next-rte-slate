import { Toolbars } from "@components/Toolbars";
import React, { useCallback, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import {
	Editable,
	RenderElementProps,
	RenderLeafProps,
	Slate,
	withReact,
} from "slate-react";

import { Element } from "../Element";
import { Leaf } from "../Leaf";

let initialValue: Descendant[] = [
	{
		type: "paragraph",
		children: [{ text: "" }],
	},
];

export function RichTextEditor(): React.ReactElement {
	const editor = useMemo(() => withReact(createEditor()), []);

	const renderElement = useCallback(
		(props: RenderElementProps) => <Element {...props} />,
		[]
	);

	const renderLeaf = useCallback(
		(props: RenderLeafProps) => <Leaf {...props} />,
		[]
	);

	return (
		<Slate editor={editor} value={initialValue}>
			<div className="flex flex-col gap-4 rounded border border-slate-600 p-4">
				<Toolbars />
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					className="p-4 min-h-[10rem] border rounded border-slate-600"
					autoFocus
				/>
			</div>
		</Slate>
	);
}
