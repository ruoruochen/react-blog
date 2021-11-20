import React, { Component } from 'react'
import CommentItem from './CommentItem'
export default class CommentList extends Component {
  render() {
    const { comments = [], userId, articleId, username } = this.props
    return (
      <div className="comment-list">
        {comments.map((comment) => (
          <CommentItem
            key={comment?.id}
            comment={comment}
            userId={userId}
            article={articleId}
            username={username}
          />
        ))}
      </div>
    )
  }
}
