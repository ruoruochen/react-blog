import React, { Component } from 'react'
import { Input, Icon } from 'antd'
import eventEmitter from '@/utils/events'
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }

  handleChange = (e) => {
    this.setState({ keyword: e.target.value })
  }

  handleCloseClick = () => {
    this.setState({ keyword: '' })
    this.handleSubmit('')
  }

  handleSubmit = (keyword) => {
    // 本质上就是触发getActicleList事件,清空其他所有条件
    eventEmitter.emit('getArticleList', {
      keyword: keyword,
      page: 1,
      pageSize: 10,
      tag: '',
    })
  }

  handlePressEnter = () => {
    this.handleSubmit(this.state.keyword)
  }
  render() {
    const { keyword } = this.state
    console.log('keyword:', keyword)
    return (
      <div id="search-box">
        <Icon
          type="search"
          className="search-icon"
          onClick={(e) => e.stopPropagation()}
        />
        <Input
          type="text"
          value={keyword}
          onChange={this.handleChange}
          onPressEnter={this.handlePressEnter}
          id="search-input"
          placeholder="搜索文章"
          suffix={
            <Icon
              type="close-circle"
              className={keyword === '' ? 'suffix-hidden' : ''}
              onClick={this.handleCloseClick}
            />
          }
        />
      </div>
    )
  }
}
