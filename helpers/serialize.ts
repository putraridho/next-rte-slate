import escapeHtml from "escape-html";
import { Descendant, Text } from "slate";

export function serialize(node: Descendant): string {
	if (Text.isText(node)) {
		let string = escapeHtml(node.text);
		if (node.bold) {
			string = `<b>${string}</b>`;
		}
		if (node.italic) {
			string = `<i>${string}</i>`;
		}
		if (node.underline) {
			string = `<u>${string}</u>`;
		}
		if (node.code) {
			string = `<code>${string}</code>`;
		}
		if (node.color) {
			string = `<span style="color: ${node.color}">${string}</span>`;
		}

		return string;
	}

	const children = node.children.map((n) => serialize(n)).join("");

	const props = {} as { [key: string]: { [key: string]: string } };

	if (node.align) {
		props.style = {
			"text-align": node.align,
		};
	}

	const attrs = Object.keys(props)
		.map(
			(k) =>
				`${k}="${Object.keys(props[k])
					.map((l) => `${l}:${props[k][l]}`)
					.join(";")}"`
		)
		.join(" ");

	switch (node.type) {
		case "h1":
			return `<h1 ${attrs}>${children}</h1>`;
		case "h2":
			return `<h2 ${attrs}>${children}</h2>`;
		case "h3":
			return `<h3 ${attrs}>${children}</h3>`;
		case "bulleted-list":
			return `<ul ${attrs}>${children}</ul>`;
		case "numbered-list":
			return `<ol ${attrs}>${children}</ol>`;
		case "list-item":
			return `<li ${attrs}>${children}</li>`;
		default:
			return `<p ${attrs}>${children}</p>`;
	}
}
