import { HEADING_ITEMS, LIST_ITEMS } from "@helpers";
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export interface ICustomText {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	code?: boolean;
}

export type TParagraph = "paragraph";
export type THeading = "h1" | "h2" | "h3";
export type TList = "numbered-list" | "bulleted-list" | "list-item";

export interface ICustomElement {
	type: TParagraph | THeading | TList;
	children: Array<ICustomText>;
}

declare module "slate" {
	export interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: ICustomElement;
		Text: ICustomText;
	}
}
