import React, { Component } from 'react'
import { Comment, Avatar, Input, Button, message } from 'antd'
import Markdown from '@/components/Markdown'
import axios from '@/utils/axios'

const { TextArea } = Input
export default class CommentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      replyVisible: false,
      value: '',
    }
  }

  componentDidMount() {
    this.setState({
      // TODO textarea解析HTML span标签
      // value: `<span className='reply-to'>@${this.props.username}</span>`,
      value: `@${this.props.username} `,
    })
  }

  handleReply = () => {
    this.setState({ replyVisible: true })
    console.log('reply')
  }
  handleReplyChange = (e) => {
    this.setState({ value: e.target.value })
  }
  handleReplySubmit = () => {
    const { userId, url, articleId, commentId, setCommentList } = this.props
    if (!userId) {
      message.worn('请登录后再评价！')
    }
    // 发送请求
    axios
      .post(url, {
        articleId: articleId,
        userId: userId,
        content: this.state.value,
        commentId: commentId,
      })
      .then((res) => {
        this.setState({ value: '', replyVisible: false })
        console.log(this.props, setCommentList)
        setCommentList?.(res?.data?.rows)
      })
  }
  render() {
    const { comment, children } = this.props
    const { replyVisible, value } = this.state
    return (
      <div>
        <Comment
          actions={[
            <span onClick={this.handleReply} className="reply-btn">
              回复
            </span>,
          ]}
          author={<span>{comment?.user?.username}</span>}
          avatar={
            <Avatar src="https://ruoruochen-img-bed.oss-cn-beijing.aliyuncs.com/img/202111180923913.jpg" />
          }
          content={
            <div className="comment-item">
              <Markdown content={comment?.content}></Markdown>
            </div>
          }
          datetime={comment?.createdAt}
        >
          {replyVisible && (
            <div className="reply-form">
              <TextArea
                placeholder={`回复 ${comment?.user?.username}`}
                value={value}
                onChange={this.handleReplyChange}
              ></TextArea>
              <div className="reply-btn">
                <span className="tip">Ctrl or ⌘ + Enter</span>
                <Button
                  type="primary"
                  disabled={!value.trim()}
                  onClick={this.handleReplySubmit}
                >
                  提交
                </Button>
              </div>
            </div>
          )}
          {children}
        </Comment>
      </div>
    )
  }
}
