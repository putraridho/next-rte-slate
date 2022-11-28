import { useState } from "react";

import { RichTextEditor } from "@components";
import { serialize } from "@helpers";
import { Loading } from "@components/Loading";

export default function Home() {
	const [value, setValue] = useState("");

	return (
		<div className="p-8 max-w-3xl mx-auto">
			<RichTextEditor
				onChange={(value) => {
					let text = value
						.map((node) => {
							return serialize(node);
						})
						.join("\n");

					setValue(text);
				}}
			/>
			<div className="p-4 border rounded border-slate-200 mt-10">
				<p className="mb-2 text-xl">Text:</p>
				<div dangerouslySetInnerHTML={{ __html: value }} />
			</div>
		</div>
	);
}
