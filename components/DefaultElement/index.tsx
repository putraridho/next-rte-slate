import { RenderElementProps } from "slate-react"

export function DefaultElement({
  attributes,
  children
}: RenderElementProps): React.ReactElement {
  return <p {...attributes}>{children}</p>
}
