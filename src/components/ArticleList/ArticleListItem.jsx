import React from 'react'
import { Divider, Icon } from 'antd'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { components } from './highlights.js'
import ArticleTag from './ArticleTag'
import { useNavigate } from 'react-router-dom'
export default function ArticleListItem(props) {
  const { data } = props
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigate(`detail/${data?.id}`, { replace: true })
  }

  return (
    <li className="article-list-item" onClick={handleClick}>
      <Divider orientation="left">
        <span className="list-item-title">{data.title}</span>
        <span className="list-item-posttime">
          {data?.createdAt?.slice(0, 10)}
        </span>
      </Divider>

      {/* 主内容模块 */}
      <ReactMarkdown
        components={components}
        children={data.content}
        remarkPlugins={[gfm]}
        className="article-detail"
      />

      <div className="list-item-others">
        <Icon type="message" />
        <span className="comment-count">{data?.comments?.length}</span>
        <Icon type="eye"></Icon>
        <span className="view-count">{data.viewCount}</span>

        <ArticleTag tagList={data.tags} />
      </div>
    </li>
  )
}
