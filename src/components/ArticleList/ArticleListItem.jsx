import React from 'react'
import { Divider, Icon } from 'antd'
import ArticleTag from './ArticleTag'
import Markdown from '@/components/Markdown'
import { useNavigate } from 'react-router-dom'
export default function ArticleListItem(props) {
  const { data } = props
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.stopPropagation()
    navigate(`/detail/${data?.id}`)
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
      <Markdown content={data?.content}></Markdown>

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
