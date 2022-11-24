export function CodeElement({
  attributes = {},
  children = null
}: ICodeElement): React.ReactElement {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}
