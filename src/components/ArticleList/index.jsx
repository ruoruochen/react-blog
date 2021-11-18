import React, { Component } from 'react'
import ArticlelistItem from './ArticleListItem'
import './index.css'
// 展示组件
export default class Articlelist extends Component {
  render() {
    const { list = [] } = this.props
    return (
      <div className="article-list">
        {list?.map((item) => (
          <ArticlelistItem key={item.id} data={item} />
        ))}
      </div>
    )
  }
}
