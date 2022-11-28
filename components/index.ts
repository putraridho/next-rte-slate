import dynamic from "next/dynamic";
import React from "react";

import { Loading } from "./Loading";
import { RichTextEditorProps } from "./RichTextEditor";

export const RichTextEditor = dynamic(
	() => import("./RichTextEditor").then((mod) => mod.RichTextEditor),
	{
		ssr: false,
		loading: Loading,
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
