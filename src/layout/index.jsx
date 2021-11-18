import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import { Layout } from 'antd'
import './index.css'
export default class MyLayout extends Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Layout className="container-box">
          <Sidebar></Sidebar>
          <div className="main-container">
            <Outlet></Outlet>
          </div>
        </Layout>
        <Footer></Footer>
      </Layout>
    )
  }
}
