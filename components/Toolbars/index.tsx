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
