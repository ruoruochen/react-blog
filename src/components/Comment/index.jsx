import React, { Component } from 'react'
import CommentEditor from './CommentEditor'
import CommentList from './CommentList'
import { connect } from 'react-redux'
class Comment extends Component {
  render() {
    const {
      comments = [],
      userId = '',
      articleId = '',
      username = '',
      setCommentList,
    } = this.props
    return (
      <div className="discuss-container">
        <div className="discuss-head">
          <div className="discuss-count">共有 {comments?.length}条评论</div>
          <CommentEditor
            comments={comments}
            userId={userId}
            articleId={articleId}
            setCommentList={setCommentList}
            url="discuss/add"
          ></CommentEditor>
        </div>
        <CommentList
          comments={comments}
          articleId={articleId}
          userId={userId}
          username={username}
          setCommentList={setCommentList}
          url="discuss/add"
        />
      </div>
    )
  }
}
export default connect((state) => state.user)(Comment)
