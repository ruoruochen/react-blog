import React, { Component } from 'react'
import { Dropdown, Menu, Button } from 'antd'
import { connect } from 'react-redux'
import { logout } from '@/redux/user/actions'
import emitter from '@/utils/events.js'
class UserInfo extends Component {
  // 先默认username通过props传进来

  // 通过userInfo中的role 渲染不同的menu
  renderDropDown = (role) => {
    const menus = (
      <Menu>
        {role === 1 && (
          <Menu.Item>
            {/* TODO */}
            <span>导入文章</span>
          </Menu.Item>
        )}
        {role === 1 && (
          <Menu.Item>
            <span>后台管理</span>
          </Menu.Item>
        )}
        <Menu.Item>
          <span
            className="user-logout"
            onClick={() => {
              this.props.dispatch(logout())
            }}
          >
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    )
    return (
      <Dropdown
        overlay={menus}
        placement="bottomCenter"
        trigger={['click', 'hover']}
      >
        <div className="username">{this.props?.username || ''}</div>
      </Dropdown>
    )
  }

  handleBtnClick = (config) => {
    // 触发openSignModal事件
    this.eventEmitter = emitter.emit('openSignModal', {
      ...config,
      visible: true,
    })
  }

  render() {
    const { username, role } = this.props
    return (
      <div className="header-userInfo">
        {username ? (
          this.renderDropDown(role)
        ) : (
          <>
            <Button
              ghost
              type="primary"
              size="small"
              onClick={() => {
                this.handleBtnClick({
                  type: 'login',
                  title: '登录',
                  operator: '登录',
                })
              }}
            >
              登录
            </Button>
            <Button
              ghost
              type="danger"
              size="small"
              onClick={() => {
                this.handleBtnClick({
                  type: 'register',
                  title: '注册',
                  operator: '注册',
                })
              }}
            >
              注册
            </Button>
          </>
        )}
      </div>
    )
  }
}

export default connect((state) => state.user)(UserInfo)
