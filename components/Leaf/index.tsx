import { RenderLeafProps } from "slate-react"

export function Leaf({
  attributes = {
    "data-slate-leaf": true
  },
  children = null,
  leaf
}: RenderLeafProps) {
  return (
    <span {...attributes} style={{ fontWeight: leaf.bold ? "bold" : "normal" }}>
      {children}
    </span>
  )
}
