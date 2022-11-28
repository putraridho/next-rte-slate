import React, { HTMLAttributes } from "react";
import { useSlate } from "slate-react";

import { checkBlock, heading_menu, toggleBlock } from "@helpers";

import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

interface SelectProps extends HTMLAttributes<HTMLDivElement> {}

export function Select({ className, ...props }: SelectProps) {
	const editor = useSlate();

	const found = heading_menu.find(({ format }) => checkBlock(editor, format));

	const active = found?.format || "paragraph";

	return (
		<Menu as="div" className="relative">
			<Menu.Button className="relative pl-4 pr-8 w-32 text-left">
				{found?.title || "Paragraph"}
				<RiArrowDownSLine className="absolute top-1/2 right-2 -translate-y-1/2" />
			</Menu.Button>
			<Transition
				as={React.Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 -translate-y-1"
				enterTo="transform opacity-100 translate-y-0"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 translate-y-0"
				leaveTo="transform opacity-0 -translate-y-1"
			>
				<Menu.Items
					as="div"
					className="absolute top-full flex flex-col gap-1 py-2 px-2 rounded bg-slate-100 border border-slate-300 translate-y-2 z-40"
				>
					{heading_menu.map(({ title, format }) => (
						<Menu.Item
							key={format}
							as="div"
							className="px-2 py-0.5 rounded whitespace-nowrap cursor-pointer hover:bg-slate-200"
							onClick={() => {
								toggleBlock(editor, format);
							}}
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
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
