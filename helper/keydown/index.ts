import { ICustomElement, ICustomText } from "components/RichTextEditor/type"
import { Editor, Text, Transforms } from "slate"

interface IArgs {
  event: React.KeyboardEvent<HTMLDivElement>
  editor: Editor
}

export function ctrlKeyEvent({ event, editor }: IArgs): void {
  if (event.ctrlKey) {
    event.preventDefault()

    switch (event.key) {
      case "`":
        toggleCode()
        break
      case "b":
        toggleBold()
        break
    }
  }

  function toggleCode() {
    const [match] = Editor.nodes(editor, {
      match: (n) => (n as ICustomElement).type === "code"
    })

    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    )
  }

  function toggleBold() {
    const [match] = Editor.nodes(editor, {
      match: (n) => !!(n as ICustomText).bold
    })
    Transforms.setNodes(
      editor,
      { bold: match ? false : true },
      { match: (n) => Text.isText(n), split: true }
    )
  }
}
