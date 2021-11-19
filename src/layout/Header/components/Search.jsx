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

  handleSubmit = (e) => {
    // 本质上就是触发getActicleList事件
    eventEmitter.emit('getArticleList', {
      keyword: this.state.keyword,
      page: 1,
      pageSize: 10,
    })
  }

  handlePressEnter = () => {
    this.handleSubmit()
  }
  render() {
    const { keyword } = this.state
    return (
      <div id="search-box">
        <Icon
          type="search"
          className="search-icon"
          onClick={(e) =>
            this.props.history.push(`/?page=1&keyword=${keyword}`)
          }
        />
        <Input
          type="text"
          value={keyword}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
          onPressEnter={this.handlePressEnter}
          className="search-input"
          placeholder="搜索文章"
          style={{ width: 200 }}
        />
      </div>
    )
  }
}
