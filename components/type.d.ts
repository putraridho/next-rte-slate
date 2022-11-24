import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export interface ICustomText {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	code?: boolean;
}

export interface ICustomElement {
	type: "paragraph" | "h1" | "h2" | "h3";
	children: Array<ICustomText>;
}

declare module "slate" {
	export interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: ICustomElement;
		Text: ICustomText;
	}
}
