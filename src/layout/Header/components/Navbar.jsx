import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import navlist from './navlist'
export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '/',
    }
  }
  handleClick = (e) => {
    this.setState({ current: e.key })
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        className="header-nav"
        mode="horizontal"
      >
        {navlist.map((nav) => (
          <Menu.Item key={nav.link} className="nav-menu-item">
            <Link to={nav.link}>
              <Icon type={nav.icon} />
              <span className="nav-text">{nav.title}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    )
  }
}
