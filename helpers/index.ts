import { Editor } from "slate";

import { ICustomText } from "@components";

export function checkMark(
	editor: Editor,
	type: keyof Omit<ICustomText, "text">
): boolean {
	const marks = Editor.marks(editor);

	if (marks) {
		return (marks as any)[type];
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
