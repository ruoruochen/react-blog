import React, { Component } from 'react'
import { Timeline, Icon } from 'antd'
import { Link } from 'react-router-dom'
import axios from '@/utils/axios'
import './index.css'
export default class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], dataCount: 0 }
  }
  componentDidMount() {
    axios.get('article/list').then((res) => {
      console.log(res?.data?.rows)
      this.setState({ data: res?.data?.rows, dataCount: res.data?.count })
    })
  }
  render() {
    return (
      <div className="app-archives">
        <div className="archives-title">{`文章归档 (共${this.state.dataCount}条记录) `}</div>
        <div className="timeline-list">
          <Timeline mode="alternate">
            {this.state.data.map((article) => (
              <Timeline.Item
                key={`${article.id}-${article.title}`}
                dot={
                  <Icon type="clock-circle-o" style={{ fontSize: '16px' }} />
                }
              >
                <Link to={`/detail/${article.id}`} key={article.id}>
                  {article.title}
                </Link>
                <div className="article-create">{article?.createdAt}</div>
              </Timeline.Item>
            ))}
          </Timeline>
          ,
        </div>
      </div>
    )
  }
}
