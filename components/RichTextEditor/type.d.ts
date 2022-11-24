import { BaseEditor } from "slate"
import { ReactEditor } from "slate-react"

export interface ICustomText {
  text: string
}

export interface ICustomElement {
  type: "paragraph" | "code"
  children: Array<ICustomText>
}

declare module "slate" {
  export interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: ICustomElement
    Text: ICustomText
  }
}
