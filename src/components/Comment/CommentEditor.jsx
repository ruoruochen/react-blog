import { Comment, Avatar, Form, Button, Input } from 'antd'
import { Component } from 'react'
import { message } from 'antd'
import axios from '@/utils/axios'
const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
)

export default class CommentEditor extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return
    }

    this.setState({
      submitting: true,
    })

    const { userId, articleId } = this.props

    // 验证用户身份
    if (!userId) {
      message.error('请登录后再评论！')
      return
    }
    // 若验证成功，发送请求
    axios
      .post(this.props?.url || 'discuss/add', {
        articleId: articleId,
        userId: userId,
        content: this.state.value,
      })
      .then(() => {
        this.setState({
          submitting: false,
          value: '',
        })
        message.success('评论成功！')
      })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    const { submitting, value } = this.state

    return (
      <div>
        <Comment
          avatar={
            <Avatar src="https://ruoruochen-img-bed.oss-cn-beijing.aliyuncs.com/img/202111180923913.jpg" />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    )
  }
}
