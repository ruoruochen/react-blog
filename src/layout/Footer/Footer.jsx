import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div>
          本系统由React + Node + Antd 联合开发 <br />
          RuoruoChen's Blog
          <span className="fighting">ヾ(◍°∇°◍)ﾉﾞ</span>
        </div>
      </footer>
    )
  }
}
