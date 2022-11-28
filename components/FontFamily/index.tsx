import { Dropdown } from "@components/Dropdown";
import { DropdownItem } from "@components/DropdownItem";

import { checkFontFamily, font_menu, toggleFontFamily } from "@helpers";
import { useSlate } from "slate-react";

export function FontFamily() {
	const editor = useSlate();

	const found = font_menu.find(({ format }) => checkFontFamily(editor, format));

	return (
		<Dropdown value={found?.title || "Default"}>
			<DropdownItem
				onClick={() => toggleFontFamily(editor, undefined)}
				active={checkFontFamily(editor, undefined)}
			>
				Default
			</DropdownItem>
			{font_menu.map(({ format, title }) => (
				<DropdownItem
					key={format}
					onClick={() => toggleFontFamily(editor, format)}
					active={checkFontFamily(editor, format)}
				>
					{format === "serif" ? (
						<span style={{ fontFamily: "serif" }}>{title}</span>
					) : format === "mono" ? (
						<span style={{ fontFamily: "monospace" }}>{title}</span>
					) : (
						<span style={{ fontFamily: "sans-serif" }}>{title}</span>
					)}
				</DropdownItem>
			))}
		</Dropdown>
	);
}
