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

import { checkBlock, checkMark, toggleBlock, toggleMark } from "@helpers";

import { ICustomElement, ICustomText } from "../type";
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

const heading_menu: Array<{
	format: ICustomElement["type"];
	Icon: IconType;
}> = [
	{ format: "h1", Icon: RiH1 },
	{ format: "h2", Icon: RiH2 },
	{ format: "h3", Icon: RiH3 },
	{ format: "paragraph", Icon: RiParagraph },
];

export function Toolbars() {
	let editor = useSlate();

	return (
		<div className="flex border rounded border-slate-600 p-2 gap-2">
			<div className="flex gap-2">
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
			<div className="border-r border-slate-300" />
			<div className="flex gap-2">
				{heading_menu.map(({ format, Icon }) => (
					<ToolbarButton
						key={format}
						active={checkBlock(editor, format)}
						onClick={(e) => {
							e.preventDefault();
							toggleBlock(editor, format);
						}}
					>
						<Icon size={16} />
					</ToolbarButton>
				))}
			</div>
		</div>
	);
}
