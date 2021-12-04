// 一些基础配置信息
import { Icon } from 'antd'
import { CSDNIcon, LocationIcon } from '@/components/SvgIcon'
// Header Title
export const HEADER_BLOG_NAME = '蒻蒻陈的博客'

// API_BASE_URL
export const API_BASE_URL = 'http://127.0.0.1:6060'

// SideBar 常量数据
export const SIDEBAR = {
  avatarSrc: './assets/images/avatar.jpg',
  title: 'RuoRuoChen',
  introduce: {
    major: '软件工程',
    schoolTime: '2018-2022级学生',
    location: {
      icon: <LocationIcon className="location-icon" />,
      address: '北京-海淀',
    },
    tech_stack: {
      前端: 'React + Redux + Antd',
      后台: 'Vue + ElementUI',
      后端: 'Node + MySql',
    },
  },
  // 个人社交网站
  homepage: {
    github: {
      link: 'https://github.com/ruoruochen',
      icon: <Icon type="github" theme="filled" className="homepage-icon" />,
    },
    csdn: {
      link: 'https://blog.csdn.net/weixin_43786756',
      icon: <CSDNIcon />,
    },
  },
}

export const ABOUT = {
  myself: {
    name: 'RuoRuoChen',
    age: 21,
    hobby: '代码、健身、乒乓球、看番',
    address: '北京-海淀',
  },
  blog: {
    client: ['React', 'Antd', 'Redux'],
    admin: ['Vue', 'Vue-Router', 'ElementUI'],
    server: ['Node', 'Express', 'Mysql'],
  },
  connect: {
    qq: '2679330388',
    github: 'https://github.com/ruoruochen',
    csdn: 'https://blog.csdn.net/weixin_43786756',
  },
}
