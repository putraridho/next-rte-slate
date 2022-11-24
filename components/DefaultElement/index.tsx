export function DefaultElement({
  attributes = {},
  children = null
}: IDefaultElement): React.ReactElement {
  return <p {...attributes}>{children}</p>
}
