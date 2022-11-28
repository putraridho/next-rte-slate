import dynamic from "next/dynamic";
import React from "react";
import { RichTextEditorProps } from "./RichTextEditor";

export * from "./Select";

export const RichTextEditor = dynamic(
	() => import("./RichTextEditor").then((mod) => mod.RichTextEditor),
	{
		ssr: false,
	}
) as React.FC<RichTextEditorProps>;

export type {
	ICustomElement,
	ICustomText,
	TAlign,
	THeading,
	TList,
	TParagraph,
} from "./type";
