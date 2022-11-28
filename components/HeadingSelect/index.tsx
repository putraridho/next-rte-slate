import React from "react";
import { useSlate } from "slate-react";

import { checkBlock, heading_menu, toggleBlock } from "@helpers";
import { Dropdown } from "../Dropdown";
import { DropdownItem } from "@components/DropdownItem";

export function HeadingSelect() {
	const editor = useSlate();

	const found = heading_menu.find(({ format }) => checkBlock(editor, format));

	return (
		<Dropdown value={found?.title || "Paragraph"}>
			{heading_menu.map(({ title, format }) => (
				<DropdownItem
					key={format}
					onClick={() => toggleBlock(editor, format)}
					active={checkBlock(editor, format)}
				>
					{format === "h1" ? (
						<h1>{title}</h1>
					) : format === "h2" ? (
						<h2>{title}</h2>
					) : format === "h3" ? (
						<h3>{title}</h3>
					) : (
						<p>{title}</p>
					)}
				</DropdownItem>
			))}
		</Dropdown>
	);
}
