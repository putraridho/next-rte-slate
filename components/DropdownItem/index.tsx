import { Menu } from "@headlessui/react";
import { HTMLAttributes } from "react";

interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
}

export function DropdownItem({
	active,
	className,
	...props
}: DropdownItemProps) {
	return (
		<Menu.Item
			as="div"
			className={[
				"px-2 py-0.5 rounded whitespace-nowrap cursor-pointer hover:bg-slate-200",
				active ? "bg-slate-200" : "",
				className,
			]
				.join(" ")
				.trim()}
			{...props}
		/>
	);
}
