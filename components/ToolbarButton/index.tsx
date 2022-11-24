import { ButtonHTMLAttributes, useMemo } from "react";

interface IToolbarButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	active?: boolean;
}

export function ToolbarButton({ active, ...props }: IToolbarButton) {
	let className = useMemo(() => {
		let string = "border rounded border-slate-600 p-1.5";

		if (active) {
			string += " text-white bg-slate-600";
		}

		return string;
	}, [active]);

	return <button {...props} className={className} />;
}
