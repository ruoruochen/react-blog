import React, { Component } from 'react'
import { SIDEBAR } from '@/config'
import { Divider } from 'antd'
import SidebarTag from './SidebarTag'
import axios from '@/utils/axios'
import './sidebar.css'
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagList: [{ name: '全部' }],
    }
  }

  componentDidMount() {
    this.getTagList()
  }

  getTagList = () => {
    axios.get('/tag/list').then((res) => {
      console.log(res.data)
      this.setState({ tagList: [{ name: '全部' }, ...res?.data] })
    })
  }

  // tagList从Props进来 即redux传递
  render() {
    const {
      tagList = [{ name: '全部' }, { name: 'Node' }, { name: '服务器与运维' }],
    } = this.state
    return (
      <aside className="app-sidebar">
        {/* TODO：为什么无法访问相对路径的图像 */}
        <img
          src="https://ruoruochen-img-bed.oss-cn-beijing.aliyuncs.com/img/202111180923913.jpg"
          alt=""
          className="sidebar-avatar"
        />
        <h2 className="sidebar-title">{SIDEBAR.title}</h2>
        <div className="introduce-myself">
          <div className="intro-major">{SIDEBAR.introduce.major}</div>
          <div className="intro-schooltime">{SIDEBAR.introduce.schoolTime}</div>
          <div className="intro-location">
            {SIDEBAR.introduce.location.icon}
            {SIDEBAR.introduce.location.address}
          </div>
          <div className="intro-tech-stack">
            {Object.entries(SIDEBAR.introduce.tech_stack).map(
              ([key, value]) => (
                <li key={key}>{`${key}: ${value}`}</li>
              )
            )}
          </div>
        </div>
        <div className="home-pages">
          {Object.entries(SIDEBAR.homepage).map(([linkName, item]) => (
            <li key={linkName}>
              {item.icon}
              <a href={item.link} target="_blank" rel="noreferrer">
                {linkName}
              </a>
            </li>
          ))}
        </div>
        <Divider orientation="left">标签</Divider>
        <div className="tag-list">
          <SidebarTag tagList={tagList}></SidebarTag>
        </div>
      </aside>
    )
  }
}
