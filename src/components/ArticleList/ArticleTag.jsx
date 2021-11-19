import React from 'react'
import { Divider, Tag, Icon } from 'antd'
import { Link } from 'react-router-dom'
export default function ArticleTag(props) {
  const { tagList } = props
  return (
    <div className="tag-list">
      {tagList.length > 0 && (
        <>
          <Divider type="vertical" />
          <Icon type="tags" />
          {tagList.map((tag, i) => (
            <Tag key={tag.name}>
              <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
            </Tag>
          ))}
        </>
      )}
    </div>
  )
}
