import { Menu, Transition } from "@headlessui/react";
import React, { HTMLAttributes } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
	value?: string;
}

export function Dropdown({
	value,
	className,
	children,
	...props
}: DropdownProps) {
	return (
		<Menu
			as="div"
			className={["relative", className].join(" ").trim()}
			{...props}
		>
			<Menu.Button className="relative pl-4 pr-6 w-32 text-left">
				{value}
				<RiArrowDownSLine className="absolute top-1/2 right-0.5 -translate-y-1/2 text-lg" />
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
					{children}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
