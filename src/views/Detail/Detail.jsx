import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Spin, Icon, Divider } from 'antd'
import ArticleTag from '@/components/ArticleList/ArticleTag.jsx'
import Markdown from '@/components/Markdown'
import Comment from '@/components/Comment'
import Navigation from '@/components/Navigation/Navigation.jsx'
import axios from '@/utils/axios'
import './index.css'
export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleId: -1,
      articleData: {},
      loading: true,
    }
  }
  componentDidMount() {
    // 获取当前 id
    const history = createBrowserHistory()
    const articleId = history?.location?.pathname.split('detail/')?.[1] || -1
    // 获取数据
    axios.get(`article/${articleId}`).then((res) => {
      this.setState({
        articleData: res?.data,
        articleId: articleId,
        loading: false,
      })
    })
  }

  setCommentList = (list) => {
    this.setState((state) => ({
      articleData: {
        ...state.articleData,
        comments: list,
      },
    }))
  }

  render() {
    const { loading, articleData: data, articleId } = this.state
    console.log(<Markdown content={data?.content}></Markdown>)
    return (
      <Spin
        tip="loading"
        spinning={loading}
        wrapperClassName="app-article-spin"
      >
        <article className="app-article">
          <div className="post-content">
            <h1 className="post-title">{data?.title}</h1>

            <div className="article-desc">
              <span className="post-time">
                <Icon type="book" />
                发布于：
                <span>{data?.createdAt}</span>
              </span>
              <ArticleTag tagList={data?.tags}></ArticleTag>
              <Divider type="vertical" />
              <Icon type="message" />
              <span className="comment-count">{data?.comments?.length}</span>
              <Icon type="eye" />
              <span className="view-count">{data?.viewCount}</span>
            </div>
          </div>
          <Markdown content={data?.content}></Markdown>
          <Comment
            comments={data?.comments}
            articleId={articleId}
            setCommentList={this.setCommentList}
          ></Comment>
        </article>
        {/* TODO：锚点矫正 */}
        <Navigation content={data?.content || ''}></Navigation>
      </Spin>
    )
  }
}
