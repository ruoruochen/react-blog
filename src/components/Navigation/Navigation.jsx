import React from 'react'
import { Anchor, Divider } from 'antd'
const { Link } = Anchor

// 根据 article 来生成锚点列表
// 通过## 辨别title #（1~6个）空格>=1个 + 换行匹配一个
function getAnchorList(str) {
  const pattern = /(#{1,6})(\s+).+/g
  const list = []
  function pushItem(arr, item) {
    const len = arr.length
    const matchItem = arr[len - 1]
    if (matchItem && matchItem.tag !== item.tag) {
      pushItem(matchItem.children, item)
    } else {
      arr.push(item)
      // debugger
    }
  }

  str.replace(pattern, ($0, $1) => {
    // console.log($0, $1)
    const title = $0.replace(/#*\s*/, '')
    const href = `#${title}`

    const currentItem = {
      tag: $1, // 标签类型
      title,
      href,
      children: [],
    }
    pushItem(list, currentItem)
  })
  return list
}

const Navigation = ({ content }) => {
  const list = getAnchorList(content.replace(/```[\s\S]*?```/g, ''))
  console.log(list, 'list')
  function renderLink({ href, title, children }) {
    return (
      <Link key={href} href={href} title={title}>
        {children.length > 0 && children.map((sub) => renderLink(sub))}
      </Link>
    )
  }
  return (
    <div className="navigation">
      <Divider>文章目录</Divider>
      <Anchor offsetTop="65">{list.map(renderLink)}</Anchor>
    </div>
  )
}

export default Navigation
