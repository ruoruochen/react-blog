import React, { Component } from 'react'
import { Spin, Empty, Pagination } from 'antd'
import { connect } from 'react-redux'
import ArticleList from '@/components/ArticleList'
import QuickLink from '@/components/QuickLink'
import eventEmitter from '@/utils/events'
import { getArticleList } from '@/redux/article/actions'
import './index.css'
class Home extends Component {
  componentDidMount() {
    // 监听emiiter
    this.emiter = eventEmitter.addListener(
      'getArticleList',
      this.getArticleListFn
    )
    eventEmitter.emit('getArticleList')
  }

  componentWillUnmount() {
    this.emiter = eventEmitter.removeListener(
      'getArticleList',
      this.getArticleListFn
    )
  }

  getArticleListFn = (params) => {
    const { dispatch, params: stateParams } = this.props
    dispatch(getArticleList({ ...stateParams, params }))
  }

  showTotal = (total) => {
    return `文章总数为 ${total} 篇`
  }

  onPageChange = (page, pageSize) => {
    console.log(`change page as ${page}、${pageSize}`)
    eventEmitter.emit('getArticleList', {
      page,
      pageSize,
    })
  }

  showSizeChange = (current, size) => {
    console.log(`change size ,befor ${current}、${size}`)
    eventEmitter.emit('getArticleList', {
      page: current ? current : 1,
      pageSize: size,
    })
  }

  render() {
    const { count: total, articleList: list, loading, params } = this.props
    console.log('loading:', loading)
    return (
      <Spin tip="Loading..." spinning={loading}>
        <div className="app-home">
          {/* ArticleList 文章列表 */}
          <ArticleList list={list}></ArticleList>
          {/* QuickLink 快速导航*/}
          <QuickLink list={list}></QuickLink>
          {/* 文章列表为0时，即搜索关键词下无文章 */}
          {list?.length === 0 && params?.keyword && (
            <div className="no-data">
              <Empty
                description={
                  <span>
                    不存在标题中包含
                    <span className="keyword">{params?.keyword}</span> 的文章
                  </span>
                }
              ></Empty>
            </div>
          )}
          {/* 分页组件 */}
          <Pagination
            total={total}
            showSizeChanger
            showQuickJumper
            showTotal={this.showTotal}
            onChange={this.onPageChange}
            onShowSizeChange={this.showSizeChange}
          />
        </div>
      </Spin>
    )
  }
}

export default connect((state) => state.article)(Home)
