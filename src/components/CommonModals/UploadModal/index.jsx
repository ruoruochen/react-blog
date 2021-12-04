import React, { Component } from 'react'
import { Modal, Button, Upload, Icon, notification } from 'antd'
import { connect } from 'react-redux'
import eventEmitter from '@/utils/events'
import axios from '@/utils/axios'
import { getToken } from '@/utils'
import { API_BASE_URL } from '@/config'
const { Dragger } = Upload
class UploadModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalData: {},
      fileList: [],
    }
  }

  componentDidMount() {
    console.log('props', this.props)
    // 监听事件
    this.eventEmitter = eventEmitter.addListener(
      'openUploadModal',
      (modalData) => {
        this.setState({ modalData: modalData })
      }
    )
  }

  handleOk = () => {
    axios
      .post('/article/upload/confirm', {
        authorId: this.props.userId,
        uploadList: this.state.fileList,
      })
      .then((res) => {
        notification.open({
          message: '上传成功',
          description: `共上传了${res.insertList.length},更新了${res.updateList.length}个文章。`,
        })
      })
  }

  handleCancel = () => {
    eventEmitter.emit('openUploadModal', {
      visible: false,
    })
  }

  handleFileChange = ({ file, fileList }) => {
    //在FileChange之前，已将文件上传至server文件夹下，判断是否存在文件,并将返回格式返回给fileList
    if (file.status === 'done') {
      const fileNameList = fileList.map((item) => item.name)
      axios.post('/article/checkExist', { fileNameList }).then((res) => {
        this.setState({ fileList: res.data })
      })
    }
  }

  render() {
    const { modalData } = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="上传文章"
          visible={modalData?.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Dragger
            multiple
            action={`${API_BASE_URL}/article/upload`}
            headers={{ Authorization: getToken() }}
            accept="text/markdown"
            onChange={this.handleFileChange}
          >
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
          ,
        </Modal>
      </div>
    )
  }
}

export default connect((state) => ({
  userId: state.user.userId,
}))(UploadModal)
