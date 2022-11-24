import React, { useState } from "react"
import { BaseEditor, createEditor, Descendant } from "slate"
import { Editable, ReactEditor, Slate, withReact } from "slate-react"

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }]
  }
]

export function RichTextEditor(): React.ReactElement {
  const [editor] = useState(() => withReact(createEditor()))

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        onKeyDown={(event) => {
          if (event.key === "&") {
            // Prevent the ampersand character from being inserted.
            event.preventDefault()
            // Execute the `insertText` method when the event occurs.
            editor.insertText("and")
          }
        }}
      />
    </Slate>
  )
}

interface ICustomText {
  text: string
}
interface ICustomElement {
  type: "paragraph"
  children: Array<ICustomText>
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: ICustomElement
    Text: ICustomText
  }
}
