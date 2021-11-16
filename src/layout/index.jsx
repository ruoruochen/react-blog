import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SideBar from './SideBar/SideBar'
import { Layout } from 'antd'
export default class MyLayout extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Layout>
          <Outlet></Outlet>
          <SideBar></SideBar>
        </Layout>
        <Footer></Footer>
      </Layout>
    )
  }
}
