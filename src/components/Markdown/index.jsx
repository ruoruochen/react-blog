import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { components } from './highlights.js'
export default function Markdown(props) {
  const { content = '' } = props
  return (
    <ReactMarkdown
      components={components}
      children={content}
      remarkPlugins={[gfm]}
      className="article-detail"
    />
  )
}
