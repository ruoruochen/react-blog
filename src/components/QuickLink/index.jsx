import React, { Component } from 'react'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'
export default class QuickLink extends Component {
  render() {
    const { list = [] } = this.props
    return (
      <div className="quicklink">
        <Divider>
          <span className="quick-title">快速导航</span>
        </Divider>
        <div className="quick-list">
          {list?.map((item) => (
            <li key={item.id} className="list-item">
              <Link to={`detail/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </div>
      </div>
    )
  }
}
