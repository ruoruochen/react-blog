import React from 'react'
import { Divider, Icon } from 'antd'
import { CommentIcon } from '@/components/SvgIcon'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { components } from './highlights.js'

export default function ArticleListItem(props) {
  const { data } = props
  return (
    <li className="article-list-item">
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
        className="article-detail content"
      />

      <div className="list-item-others">
        <CommentIcon></CommentIcon>
        <Icon type="eye"></Icon>
        <span>{data.viewCount}</span>

        {/* <ArticleTag tagList={item.tags} categoryList={item.categories} /> */}
      </div>
    </li>
  )
}
