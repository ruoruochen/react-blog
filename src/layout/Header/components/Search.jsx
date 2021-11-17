import React, { Component } from 'react'
import { Input, Icon } from 'antd'
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }

  handleChange = (e) => {}

  handleSubmit = (e) => {}

  handlePressEnter = (e) => {}
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
