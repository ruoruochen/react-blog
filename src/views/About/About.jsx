import React, { Component } from 'react'
import { Tag, Icon } from 'antd'
import { ABOUT } from '@/config'
import { getTagColor } from '@/utils'
import './index.css'
export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <img
          src="https://ruoruochen-img-bed.oss-cn-beijing.aliyuncs.com/img/202112042102676.webp"
          alt=""
        />
        <div className="about-me">
          <h1>关于我</h1>
          <ul>
            <li>
              <span>姓名：</span>
              {ABOUT.myself.name}
            </li>
            <li>
              <span>年龄：</span>
              {ABOUT.myself.age}
            </li>
            <li>
              <span>爱好：</span>
              {ABOUT.myself.hobby}
            </li>
            <li>
              <span>位置：</span>
              {ABOUT.myself.address}
            </li>
          </ul>
        </div>
        <div className="about-blog">
          <h1>关于博客</h1>
          <ul>
            <li>
              <span>前台技术栈：</span>
              {ABOUT.blog.client.map((item) => (
                <Tag color={getTagColor()} key={item}>
                  {item}
                </Tag>
              ))}
            </li>
            <li>
              <span>后台技术栈：</span>
              {ABOUT.blog.admin.map((item) => (
                <Tag color={getTagColor()} key={item}>
                  {item}
                </Tag>
              ))}
            </li>
            <li>
              <span>后端技术栈：</span>
              {ABOUT.blog.server.map((item) => (
                <Tag color={getTagColor()}>{item}</Tag>
              ))}
            </li>
          </ul>
        </div>
        <div className="connect">
          <h1>联系我</h1>
          <ul>
            <li>
              <span>QQ：</span>
              {ABOUT.connect.qq}
            </li>
            <li>
              <span>Github：</span>
              <a href={ABOUT.connect.github} target="_blank" rel="noreferrer">
                {ABOUT.connect.github}
              </a>
            </li>
            <li>
              <span>CSDN：</span>
              <a href={ABOUT.connect.csdn} target="_blank" rel="noreferrer">
                {ABOUT.connect.csdn}
              </a>
            </li>
          </ul>
        </div>
        <div className="motto">
          <h1>未完待续...</h1>
          <div className="motto-item">
            <Icon type="pushpin" theme="twoTone" twoToneColor="#16c60c" />
            学如逆水行舟，不进则退。愿大家都能成为想要成为的人。
          </div>
          <div className="motto-item">
            <Icon type="pushpin" theme="twoTone" twoToneColor="#16c60c" />
            未来的路还很长，纵使这条路很累，但总有人会一路陪你，就像波吉的小黑，加油陌生人。
          </div>
          <img
            src="https://ruoruochen-img-bed.oss-cn-beijing.aliyuncs.com/img/202112042053014.webp"
            alt="波吉"
          />
        </div>
      </div>
    )
  }
}
