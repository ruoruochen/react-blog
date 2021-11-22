import React, { Component } from 'react'
import CommentItem from './CommentItem'
export default class CommentList extends Component {
  render() {
    const {
      comments = [],
      userId,
      articleId,
      username,
      url,
      setCommentList,
    } = this.props
    return (
      <div className="comment-list">
        {comments.map((comment) => (
          <CommentItem
            key={comment?.id}
            comment={comment}
            commentId={comment.id}
            userId={userId}
            articleId={articleId}
            username={username}
            url={url}
            setCommentList={setCommentList}
          >
            {comment?.replies?.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                userId={userId}
                commentId={comment.id}
                articleId={articleId}
                username={username}
                url={url}
                setCommentList={setCommentList}
              />
            ))}
          </CommentItem>
        ))}
      </div>
    )
  }
}
