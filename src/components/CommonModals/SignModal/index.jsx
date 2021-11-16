import React, { Component } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import emitter from '@/utils/events.js'
import { login, register } from '@/redux/user/actions'
class SignModal extends Component {
  /* 参数化配置传入：{
    type:'xxx'
    title:'xxx'
    operator:''
  }*/
  constructor(props) {
    super(props)
    this.state = {
      modalData: {},
    }
  }

  componentDidMount() {
    // 监听eventEmitter
    this.eventEmitter = emitter.addListener('openSignModal', (modalData) => {
      this.setState({ modalData })
    })
  }
  // 提交表单
  handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    const action = this.state.modalData.type === 'login' ? login : register
    this.props.dispatch(action())
  }
  handleCancel = (e) => {}
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form?.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  render() {
    const { modalData } = this.state
    const { type, title, visible, operator } = modalData || {}
    // const { getFieldDecorator } = this.props.form
    return (
      <Modal
        title={title}
        visible={visible}
        onCancel={this.handleCancel}
        footer={null}
      >
        <Form onSubmit={this.handleSubmit} className="common-form">
          {type === 'login' ? (
            <>
              <Form.Item label="用户名">
                {/* {getFieldDecorator('account', {
                  rules: [{ required: true, message: 'Username is required' }],
                })(<Input placeholder="请输入用户名" />)} */}
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item label="密码">
                {/* {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Password is required' }],
                })(<Input placeholder="请输入密码" type="password" />)} */}
                <Input placeholder="请输入密码" type="password" />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item label="用户名">
                {/* {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Username is required' }],
                })(<Input placeholder="请输入用户名" />)} */}
                <Input placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item label="密码">
                {/* {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Password is required' }],
                })(<Input placeholder="请输入密码" type="password" />)} */}
                <Input placeholder="请输入密码" type="password" />
              </Form.Item>
              <Form.Item label="确认密码">
                {/* {getFieldDecorator('confirm', {
                  rules: [
                    { required: true, message: 'Password is required' },
                    { validator: this.compareToFirstPassword },
                  ],
                })(<Input placeholder="确认密码" type="password" />)} */}
                <Input placeholder="确认密码" type="password" />
              </Form.Item>
              <Form.Item label="邮箱">
                {/* {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    { required: true, message: 'Please input your E-mail!' },
                  ],
                })(<Input placeholder="请输入您的邮箱" />)} */}
                <Input placeholder="请输入您的邮箱" />
              </Form.Item>
            </>
          )}
        </Form>
        <Button type="primary" block onClick={this.handleSubmit}>
          {operator}
        </Button>
      </Modal>
    )
  }
}
export default connect((state) => state.user)(SignModal)
