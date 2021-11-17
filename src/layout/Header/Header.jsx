import React, { Component } from 'react'
import { Layout } from 'antd'
import BlogName from './components/BlogName'
import Search from './components/Search'
import Navbar from './components/Navbar'
import UserInfo from './components/UserInfo'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <Layout.Header className="app-header">
        {/* 四部分：博客名称、搜索框、nav、登录注册/UserInfo */}
        <BlogName></BlogName>
        <Search></Search>
        <Navbar></Navbar>
        <UserInfo></UserInfo>
      </Layout.Header>
    )
  }
}
