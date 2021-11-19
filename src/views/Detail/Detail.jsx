import React, { Component } from 'react'
import { createBrowserHistory } from 'history'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleId: -1,
    }
  }
  componentDidMount() {
    // 获取当前 id
    const history = createBrowserHistory()
    this.setState({
      articleId: history?.location?.pathname.split('detail/')[1],
    })
  }
  render() {
    console.log(this.state.articleId)
    return <div>Detail,{this.state.articleId}</div>
  }
}
