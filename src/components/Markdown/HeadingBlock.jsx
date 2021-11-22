import React, { PureComponent } from 'react'
import Heading from './Heading'

// heading block处理 给heading添加id
class HeadingBlock extends PureComponent {
  renderHtml = () => {
    const { level, children } = this.props
    console.log('level', level, children)
    if (children && children.length > 0) {
      const nodeValue = children[0]
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          {children}
        </Heading>
      )
    } else {
      return <>{children}</>
    }
  }
  render() {
    return <>{this.renderHtml()}</>
  }
}

export default HeadingBlock
