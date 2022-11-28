import { ButtonHTMLAttributes, useMemo } from "react";

interface IToolbarButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

export function ToolbarButton({ active, ...props }: IToolbarButton) {
	let className = useMemo(() => {
		let string = "hover:bg-slate-200 active:bg-slate-300 rounded p-1.5 duration-200 ease-out";

		if (active) {
			string += " text-slate-600 bg-slate-300 hover:bg-slate-300 ease-in";
		}

		return string;
	}, [active]);

	return <button {...props} className={className} />;
}
