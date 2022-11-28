import {
	ICustomText,
	TParagraph,
	THeading,
	TAlign,
	TList,
	ICustomElement,
} from "@components";
import { IconType } from "react-icons";
import {
	RiBold,
	RiItalic,
	RiUnderline,
	RiCodeFill,
	RiAlignLeft,
	RiAlignCenter,
	RiAlignRight,
	RiAlignJustify,
	RiListOrdered,
	RiListUnordered,
	RiSuperscript,
	RiSubscript,
} from "react-icons/ri";

export const LIST_ITEMS = ["numbered-list", "bulleted-list"];

export const toggle_menu: Array<{
	format: keyof Omit<ICustomText, "text">;
	title: string;
	Icon: IconType;
}> = [
	{ format: "bold", title: "Bold", Icon: RiBold },
	{ format: "italic", title: "Italic", Icon: RiItalic },
	{ format: "underline", title: "Underline", Icon: RiUnderline },
	{ format: "code", title: "Code", Icon: RiCodeFill },
	{ format: "superscript", title: "Superscript", Icon: RiSuperscript },
	{ format: "subscript", title: "Subscript", Icon: RiSubscript },
];

export const heading_menu: Array<{
	format: TParagraph | THeading;
	title: string;
}> = [
	{ format: "h1", title: "Heading 1" },
	{ format: "h2", title: "Heading 2" },
	{ format: "h3", title: "Heading 3" },
	{ format: "paragraph", title: "Paragraph" },
];

export const font_menu: Array<{
	format: ICustomElement["fontFamily"];
	title: string;
}> = [
	{ format: "sans", title: "Sans serif" },
	{ format: "serif", title: "Serif" },
	{ format: "mono", title: "Monospace" },
];

export const align_menu: Array<{
	format: TAlign;
	title: string;
	Icon: IconType;
}> = [
	{ format: "left", title: "Left", Icon: RiAlignLeft },
	{ format: "center", title: "Center", Icon: RiAlignCenter },
	{ format: "right", title: "Right", Icon: RiAlignRight },
	{ format: "justify", title: "Justify", Icon: RiAlignJustify },
];

export const list_menu: Array<{
	format: TList;
	title: string;
	Icon: IconType;
}> = [
	{ format: "numbered-list", title: "Ordered List", Icon: RiListOrdered },
	{ format: "bulleted-list", title: "Unordered List", Icon: RiListUnordered },
];
