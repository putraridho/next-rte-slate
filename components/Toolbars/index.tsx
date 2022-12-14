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
import { HeadingSelect } from "../HeadingSelect";
import { FontColor } from "../FontColor";
import { FontFamily } from "../FontFamily";

export function Toolbars() {
	const editor = useSlate();

	return (
		<div className="sticky top-8 flex flex-wrap border border-slate-300 rounded-t p-3 md:p-4 gap-3 md:gap-4 bg-slate-100 z-10">
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
			<HeadingSelect />
			<div className="border-r border-slate-300" />
			<FontFamily />
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
