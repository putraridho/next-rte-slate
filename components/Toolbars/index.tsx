import { IconType } from "react-icons";
import {
	RiBold,
	RiCodeFill,
	RiH1,
	RiH2,
	RiH3,
	RiItalic,
	RiParagraph,
	RiUnderline,
} from "react-icons/ri";
import { useSlate } from "slate-react";

import { checkMark, toggleMark } from "@helpers";

import { ICustomText } from "../type";
import { ToolbarButton } from "../ToolbarButton";

const toggle_menu: Array<{
	format: keyof Omit<ICustomText, "text">;
	Icon: IconType;
}> = [
	{ format: "bold", Icon: RiBold },
	{ format: "italic", Icon: RiItalic },
	{ format: "underline", Icon: RiUnderline },
	{ format: "code", Icon: RiCodeFill },
];

export function Toolbars() {
	let editor = useSlate();

	return (
		<div className="flex border rounded border-slate-600 p-2 gap-2">
			{toggle_menu.map(({ format, Icon }) => (
				<ToolbarButton
					key={format}
					active={checkMark(editor, format)}
					onClick={(e) => {
						e.preventDefault();
						toggleMark(editor, format);
					}}
				>
					<Icon size={16} />
				</ToolbarButton>
			))}
		</div>
	);
}
