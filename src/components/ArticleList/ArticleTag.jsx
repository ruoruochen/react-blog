import React from 'react'
import { Divider, Tag, Icon } from 'antd'
import { getTagColor } from '@/utils'
export default function ArticleTag(props) {
  const { tagList = [] } = props
  return (
    <span className="tag-list">
      {tagList.length > 0 && (
        <>
          <Divider type="vertical" />
          <Icon type="tags" />
          {tagList.map((tag, i) => (
            <Tag key={tag.name} color={getTagColor()}>
              {tag.name}
            </Tag>
          ))}
        </>
      )}
    </span>
  )
}
