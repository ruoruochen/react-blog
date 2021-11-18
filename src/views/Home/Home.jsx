import React, { Component } from 'react'
import { Spin, Empty } from 'antd'
import { connect } from 'react-redux'
import ArticleList from '@/components/ArticleList'
import eventEmitter from '@/utils/events'
import { getArticleList } from '@/redux/article/actions'
class Home extends Component {
  getArticleListFn = (params) => {
    const { dispatch, params: stateParams } = this.props
    dispatch(getArticleList({ ...stateParams, params }))
  }

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

  render() {
    const { articleList: list, loading, params } = this.props
    console.log('loading:', loading)
    return (
      <Spin tip="Loading..." spinning={loading}>
        <div className="app-home">
          {/* ArticleList 文章列表 */}
          <ArticleList list={list}></ArticleList>
          {/* QUickLink 快速导航*/}

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
        </div>
      </Spin>
    )
  }
}

export default connect((state) => state.article)(Home)
