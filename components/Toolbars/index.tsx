import { useSlate } from "slate-react";

import {
	align_menu,
	checkAlign,
	checkBlock,
	checkMark,
	heading_menu,
	list_menu,
	toggleAlign,
	toggleBlock,
	toggleMark,
	toggle_menu,
} from "@helpers";

import { ToolbarButton } from "../ToolbarButton";
import { Select } from "../Select";
import { FontColor } from "../FontColor";

export function Toolbars() {
	const editor = useSlate();

	return (
		<div className="flex flex-wrap border border-slate-600 px-4 py-4 gap-4 bg-neutral-100">
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
						<Icon />
					</ToolbarButton>
				))}
			</div>
			<div className="border-r border-slate-300" />
			<Select>
				{heading_menu.map(({ format, title }) => (
					<option key={format} value={format}>
						{title}
					</option>
				))}
			</Select>
			<div className="border-r border-slate-300" />
			<div className="flex items-center">
				<FontColor />
			</div>
			<div className="border-r border-slate-300" />
			<div className="flex gap-2">
				{align_menu.map(({ format, title, Icon }) => (
					<ToolbarButton
						key={format}
						active={checkAlign(editor, format)}
						onClick={(e) => {
							e.preventDefault();
							toggleAlign(editor, format);
						}}
						title={title}
					>
						<Icon />
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
						<Icon />
					</ToolbarButton>
				))}
			</div>
		</div>
	);
}
