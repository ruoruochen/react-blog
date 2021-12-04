import React, { Component } from 'react'
import { Icon, Tag } from 'antd'
import axios from '@/utils/axios'
import ArticleList from '@/components/ArticleList'
import './index.css'
export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: { name: '全部分类' },
      categoryList: [],
      data: [],
      dataCount: 0,
    }
  }

  componentDidMount() {
    this.getArticleList()
    // 获取category列表
    axios.get('category/list').then((res) => {
      this.setState({
        categoryList: [{ name: '全部分类' }, ...res?.data],
      })
    })
  }

  getArticleList = (params = {}) => {
    // 获取文章
    axios
      .get('article/list', {
        params: { ...params },
      })
      .then((res) => {
        this.setState({ data: res?.data?.rows, dataCount: res.data?.count })
      })
  }

  handleClick = (category) => {
    this.setState({ current: category })
    // 特判
    this.getArticleList(category?.count ? { category: category?.name } : {})
  }
  render() {
    const { current, categoryList, data, dataCount } = this.state
    return (
      <div className="app-categories">
        <div className="categories-list">
          <div className="list-header">
            <Icon type="folder" />
            {current?.name ? (
              <span className="list-title">{`${current?.name} (${
                current?.count || dataCount
              } 条记录)`}</span>
            ) : (
              ''
            )}
          </div>
          <div className="list-tags">
            {categoryList.map((category) => (
              <Tag
                key={category?.name}
                color={current?.name === category?.name ? '#108ee9' : ''}
                onClick={() => this.handleClick(category)}
              >
                {category?.count
                  ? `${category?.name}(${category?.count})`
                  : `${category?.name}`}
              </Tag>
            ))}
          </div>
        </div>
        <div className="categories-data">
          <ArticleList list={data}></ArticleList>
        </div>
      </div>
    )
  }
}
