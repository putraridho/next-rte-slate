import { ctrlKeyEvent, CustomEditor } from "@helpers"
import React, { useCallback, useEffect, useMemo, useState } from "react"
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

const initialValue = (function () {
  if (typeof window !== "undefined") {
    const content = window.localStorage.getItem("content")

    if (content) {
      return JSON.parse(content)
    }
  }

  return [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }]
    }
  ]
})()

export function RichTextEditor(): React.ReactElement {
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = useMemo(() => {
    const content = window.localStorage.getItem("content")

    if (content) {
      return JSON.parse(content)
    }

    return [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }]
      }
    ]
  }, [])

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
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          (op) => "set_selection" !== op.type
        )

        if (isAstChange) {
          const content = JSON.stringify(value)
          localStorage.setItem("content", content)
        }
      }}
    >
      <div>
        <button
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={(event) => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>
      </div>
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
