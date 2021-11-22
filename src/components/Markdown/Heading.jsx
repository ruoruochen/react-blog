import React from 'react'

const element = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}
// 创建Heading元素

export default function Heading({ level, children, ...props }) {
  return React.createElement(element[level] || element.h1, props, children)
}
