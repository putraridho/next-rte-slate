import { ctrlKeyEvent } from "helper"
import React, { useCallback, useState } from "react"
import { createEditor, Descendant } from "slate"
import { Editable, RenderElementProps, Slate, withReact } from "slate-react"

import { CodeElement } from "../CodeElement"
import { DefaultElement } from "../DefaultElement"

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }]
  }
]

export function RichTextEditor(): React.ReactElement {
  const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        onKeyDown={(event) => {
          ctrlKeyEvent({
            key: "`",
            event,
            editor
          })
        }}
      />
    </Slate>
  )
}
