import { ICustomElement } from "components/RichTextEditor/type"
import { Editor, Transforms } from "slate"

interface IArgs {
  event: React.KeyboardEvent<HTMLDivElement>
  key: string
  editor: Editor
}

export function ctrlKeyEvent({ event, key, editor }: IArgs): void {
  if (event.key === key && event.ctrlKey) {
    event.preventDefault()

    const [match] = Editor.nodes(editor, {
      match: (n) => (n as ICustomElement).type === "code"
    })

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    )
  }
}
