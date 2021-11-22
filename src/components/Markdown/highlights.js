import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import HeadingBlock from './HeadingBlock'
// const Heading

export const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={tomorrow}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  h1: HeadingBlock,
  h2: HeadingBlock,
  h3: HeadingBlock,
  h4: HeadingBlock,
  h5: HeadingBlock,
  h6: HeadingBlock,
}
