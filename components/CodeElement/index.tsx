import { RenderElementProps } from "slate-react"

export function CodeElement({
  attributes,
  children
}: RenderElementProps): React.ReactElement {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}
