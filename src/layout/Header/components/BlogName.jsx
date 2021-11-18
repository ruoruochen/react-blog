import React, { Component } from 'react'
import { PandaIcon } from '@/components/SvgIcon'
import { HEADER_BLOG_NAME } from '@/config'
export default class BlogName extends Component {
  render() {
    return (
      <div className="header-blog-name">
        <PandaIcon></PandaIcon>
        <span className="blog-name">{HEADER_BLOG_NAME}</span>
      </div>
    )
  }
}
