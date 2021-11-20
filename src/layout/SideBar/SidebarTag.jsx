import React, { Component } from 'react'
import { Tag } from 'antd'
import { getTagColor } from '@/utils'
import eventEmitter from '@/utils/events'
export default class SidebarTag extends Component {
  handleTagClick = (tag) => {
    console.log('click tag', tag)
    eventEmitter.emit('getArticleList', {
      tag: tag?.name,
      page: 1,
      pageSize: 10,
    })
  }
  render() {
    const { tagList } = this.props
    return (
      <>
        {tagList.map((tag, index) => (
          <Tag
            key={tag.name}
            color={getTagColor()}
            onClick={() => {
              this.handleTagClick(tag)
            }}
            className="tag-list-item"
          >
            {tag.name}
          </Tag>
        ))}
      </>
    )
  }
}
