import React, { Component } from 'react'
import { Comment, Avatar, Input } from 'antd'
import Markdown from '@/components/Markdown'

const { TextArea } = Input
export default class CommentItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      replyVisible: false,
      value: '',
    }
  }
  handleReply = () => {
    this.setState({ replyVisible: true })
    console.log('reply')
  }
  handleReplyChange = () => {}
  render() {
    const { comment, username } = this.props
    const { replyVisible, value } = this.state
    return (
      <div>
        <Comment
          actions={[
            <span onClick={this.handleReply} className="reply-btn">
              回复
            </span>,
          ]}
          author={<span>{username}</span>}
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
            </div>
          )}
        </Comment>
      </div>
    )
  }
}
