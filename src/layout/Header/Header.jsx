import React, { Component } from 'react'
import { Layout } from 'antd'
import { HEADER_BLOG_NAME } from '@/config'
import Search from './components/Search'
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import './header.less'
export default class Header extends Component {
  render() {
    return (
      <Layout.Header className="app-header">
        {/* 四部分：博客名称、搜索框、nav、登录注册/UserInfo */}
        <div className="header-blog-name">
          <span className="blog-name">{HEADER_BLOG_NAME}</span>
        </div>
        <Search></Search>
        <Navbar></Navbar>
        <UserInfo></UserInfo>
      </Layout.Header>
    )
  }
}
