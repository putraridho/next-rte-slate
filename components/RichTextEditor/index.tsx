import { Toolbars } from "@components/Toolbars";
import { ctrlShortcut } from "@helpers";
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

export interface RichTextEditorProps {
	onChange?: ((value: Descendant[]) => void) | undefined;
}

export function RichTextEditor({
	onChange,
}: RichTextEditorProps): React.ReactElement {
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
		<Slate editor={editor} value={initialValue} onChange={onChange}>
			<div className="relative">
				<Toolbars />
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					className="p-4 min-h-[25rem] md:min-h-[10rem] border border-t-0 rounded-b border-slate-200"
					autoFocus
					onKeyDown={(e) => {
						if (e.ctrlKey) {
							ctrlShortcut(editor, e);
						}
					}}
				/>
			</div>
		</Slate>
	);
}
