import { CustomEditor } from "../custom-editor"
import { Editor } from "slate"

interface IArgs {
  event: React.KeyboardEvent<HTMLDivElement>
  editor: Editor
}

export function ctrlKeyEvent({ event, editor }: IArgs): void {
  if (event.ctrlKey) {
    event.preventDefault()

    switch (event.key) {
      case "`":
        CustomEditor.toggleCodeBlock(editor)
        break
      case "b":
        CustomEditor.toggleBoldMark(editor)
        break
    }
  }
}
