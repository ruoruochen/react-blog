import React, { Component } from 'react'
import { SIDEBAR } from '@/config'
import { Divider, Tag } from 'antd'
import { Link } from 'react-router-dom'
import './sidebar.css'
export default class Sidebar extends Component {
  // tagList从Props进来 即redux传递
  render() {
    const {
      tagList = [
        { name: '浏览器1111' },
        { name: 'HTTPsss' },
        { name: '浏览sss器' },
        { name: 'HTTP' },
        { name: '浏览c器' },
        { name: 'HTTP' },
        { name: '浏d览器' },
        { name: 'HTTP' },
        { name: '浏览器' },
        { name: 'HTTP' },
        { name: '浏览器' },
        { name: 'HTTP' },
      ],
    } = this.props
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
          {tagList.map((tag, index) => (
            <Tag key={tag.name} color="magenta">
              <Link to={`tags/${tag.name}`}>{tag.name}</Link>
            </Tag>
          ))}
        </div>
      </aside>
    )
  }
}
