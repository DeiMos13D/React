import React from 'react'
import PropTypes from 'prop-types'

function Comment({comments}) {
    return (
        <div>
            {comments.map(comment =>
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <section>{comment.text}</section>
                </div>
            )}
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.array
} // in CommentsList.js

export default Comment