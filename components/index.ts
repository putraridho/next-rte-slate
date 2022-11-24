import dynamic from "next/dynamic"
import React from "react"

export const RichTextEditor = dynamic(
  () => import("./RichTextEditor").then((mod) => mod.RichTextEditor),
  {
    ssr: false
  }
) as React.FC<{}>
