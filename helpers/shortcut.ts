import { Editor } from "slate";
import { toggleMark } from "./events";

export function ctrlShortcut(
	editor: Editor,
	event: React.KeyboardEvent<HTMLDivElement>
) {
	switch (event.key) {
		case "b":
			event.preventDefault();
			toggleMark(editor, "bold");
			break;
		case "i":
			event.preventDefault();
			toggleMark(editor, "italic");
			break;
		case "u":
			event.preventDefault();
			toggleMark(editor, "underline");
			break;
		case "`":
			event.preventDefault();
			toggleMark(editor, "code");
			break;
	}
}
