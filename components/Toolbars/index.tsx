import { IconType } from "react-icons";
import {
	RiBold,
	RiCodeFill,
	RiH1,
	RiH2,
	RiH3,
	RiItalic,
	RiListOrdered,
	RiListUnordered,
	RiParagraph,
	RiUnderline,
} from "react-icons/ri";
import { useSlate } from "slate-react";

import { checkBlock, checkMark, toggleBlock, toggleMark } from "@helpers";

import {
	ICustomElement,
	ICustomText,
	THeading,
	TList,
	TParagraph,
} from "../type";
import { ToolbarButton } from "../ToolbarButton";

const toggle_menu: Array<{
	format: keyof Omit<ICustomText, "text">;
	title: string;
	Icon: IconType;
}> = [
	{ format: "bold", title: "Bold", Icon: RiBold },
	{ format: "italic", title: "Italic", Icon: RiItalic },
	{ format: "underline", title: "Underline", Icon: RiUnderline },
	{ format: "code", title: "Code", Icon: RiCodeFill },
];

const heading_menu: Array<{
	format: TParagraph | THeading;
	title: string;
	Icon: IconType;
}> = [
	{ format: "h1", title: "H1", Icon: RiH1 },
	{ format: "h2", title: "H2", Icon: RiH2 },
	{ format: "h3", title: "H3", Icon: RiH3 },
	{ format: "paragraph", title: "Paragraph", Icon: RiParagraph },
];

const list_menu: Array<{
	format: TList;
	title: string;
	Icon: IconType;
}> = [
	{ format: "numbered-list", title: "Ordered List", Icon: RiListOrdered },
	{ format: "bulleted-list", title: "Unordered List", Icon: RiListUnordered },
];

export function Toolbars() {
	let editor = useSlate();

	return (
		<div className="flex border rounded border-slate-600 p-2 gap-2">
			<div className="flex gap-2">
				{toggle_menu.map(({ format, title, Icon }) => (
					<ToolbarButton
						key={format}
						active={checkMark(editor, format)}
						onClick={(e) => {
							e.preventDefault();
							toggleMark(editor, format);
						}}
						title={title}
					>
						<Icon size={16} />
					</ToolbarButton>
				))}
			</div>
			<div className="border-r border-slate-300" />
			<div className="flex gap-2">
				{heading_menu.map(({ format, title, Icon }) => (
					<ToolbarButton
						key={format}
						active={checkBlock(editor, format)}
						onClick={(e) => {
							e.preventDefault();
							toggleBlock(editor, format);
						}}
						title={title}
					>
						<Icon size={16} />
					</ToolbarButton>
				))}
			</div>
			<div className="border-r border-slate-300" />
			<div className="flex gap-2">
				{list_menu.map(({ format, title, Icon }) => (
					<ToolbarButton
						key={format}
						active={checkBlock(editor, format)}
						onClick={(e) => {
							e.preventDefault();
							toggleBlock(editor, format);
						}}
						title={title}
					>
						<Icon size={16} />
					</ToolbarButton>
				))}
			</div>
		</div>
	);
}
