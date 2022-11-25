import { Editor, Element, Transforms } from "slate";

import { ICustomElement, ICustomText } from "@components";
import { LIST_ITEMS } from "./const";

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
	let isActive = checkBlock(editor, type);
	let isList = LIST_ITEMS.includes(type);

	Transforms.unwrapNodes(editor, {
		match: (n) =>
			!Editor.isEditor(n) &&
			Element.isElement(n) &&
			LIST_ITEMS.includes(n.type),
		split: true,
	});

	let newProperties: Partial<Element>;

	newProperties = {
		type: isActive ? "paragraph" : isList ? "list-item" : type,
	};

	Transforms.setNodes(editor, newProperties);

	if (!isActive && isList) {
		const block = { type, children: [] };
		Transforms.wrapNodes(editor, block);
	}
}

export function checkAlign(
	editor: Editor,
	align: ICustomElement["align"]
): boolean {
	if (editor.selection) {
		const [match] = Editor.nodes(editor, {
			at: Editor.unhangRange(editor, editor.selection),
			match: (n) =>
				!Editor.isEditor(n) && Element.isElement(n) && n.align === align,
		});

		return !!match;
	}
	return false;
}

export function toggleAlign(editor: Editor, align: ICustomElement["align"]) {
	const isActive = checkAlign(editor, align);

	let newProperties: Partial<Element>;

	newProperties = {
		align: isActive ? undefined : align,
	};

	Transforms.setNodes(editor, newProperties);
}

export * from "./const";
