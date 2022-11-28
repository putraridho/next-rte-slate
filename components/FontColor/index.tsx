import { RiFontColor } from "react-icons/ri";
import { useSlate } from "slate-react";

import { checkColor, setColor } from "@helpers";

export function FontColor() {
	const editor = useSlate();
	const color = checkColor(editor);

	return (
		<div className="flex items-center gap-2">
			<div className="relative">
				<label htmlFor="font-color" style={{ color: color || "#000000" }}>
					<div
						className="border rounded border-slate-600 p-1.5"
						title={"Text color: " + color}
					>
						<RiFontColor />
					</div>
				</label>
				<input
					id="font-color"
					type="color"
					className="absolute h-0 w-0 opacity-0"
					value={color || "#000000"}
					onChange={(e) => {
						setColor(editor, e.target.value);
					}}
				/>
			</div>
			{color && (
				<button
					className="text-xs"
					title="Clear text color"
					onClick={() => setColor(editor, undefined)}
				>
					Reset
				</button>
			)}
		</div>
	);
}
