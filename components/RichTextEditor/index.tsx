import { ctrlKeyEvent } from "helper"
import React, { useCallback, useState } from "react"
import { createEditor, Descendant } from "slate"
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
  withReact
} from "slate-react"

import { CodeElement } from "../CodeElement"
import { DefaultElement } from "../DefaultElement"
import { Leaf } from "../Leaf"

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

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  )

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          ctrlKeyEvent({
            event,
            editor
          })
        }}
      />
    </Slate>
  )
}
