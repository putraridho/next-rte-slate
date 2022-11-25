import { Editor, Element, Transforms } from "slate";

import { ICustomElement, ICustomText } from "@components";

export function checkMark(
	editor: Editor,
	type: keyof Omit<ICustomText, "text">
): boolean {
	const marks = Editor.marks(editor);

	if (marks) {
		return marks[type] || false;
	}

	return false;
}

export function toggleMark(
	editor: Editor,
	type: keyof Omit<ICustomText, "text">
) {
	if (checkMark(editor, type)) {
		editor.removeMark(type);
	} else {
		editor.addMark(type, true);
	}
}

export function checkBlock(
	editor: Editor,
	type: ICustomElement["type"]
): boolean {
	if (editor.selection) {
		const [match] = Array.from(
			Editor.nodes(editor, {
				at: Editor.unhangRange(editor, editor.selection),
				match: (n) => {
					return !Editor.isEditor(n) && Element.isElement(n) && n.type === type;
				},
			})
		);
		return !!match;
	}

	return false;
}

export function toggleBlock(editor: Editor, type: ICustomElement["type"]) {
	Transforms.setNodes(
		editor,
		{ type: checkBlock(editor, type) ? "paragraph" : type },
		{ match: (n) => Editor.isBlock(editor, n) }
	);
}
