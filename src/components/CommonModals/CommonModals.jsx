import React, { Component } from 'react'
import SignModal from './SignModal'
import UploadModal from './UploadModal'
export default class CommonModals extends Component {
  render() {
    return (
      <div className="common-modal">
        <SignModal></SignModal>
        <UploadModal></UploadModal>
      </div>
    )
  }
}
