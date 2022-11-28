import { SelectHTMLAttributes } from "react";
import { useSlate } from "slate-react";

import { checkBlock, heading_menu, toggleBlock } from "@helpers";

import { ICustomElement } from "../type";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, ...props }: SelectProps) {
	const editor = useSlate();

	const found = heading_menu.find(({ format }) => checkBlock(editor, format));

	const active = found?.format || "paragraph";

	return (
		<select
			value={active}
			className={["px-2 bg-transparent", className].join(" ").trim()}
			onChange={(e) => {
				toggleBlock(
					editor,
					(e.target.value as ICustomElement["type"]) || "paragraph"
				);
			}}
			{...props}
		/>
	);
}
