import React from 'react';
import PropTypes from 'prop-types';

import './CommentsList.css';

export function CommentsList({ comments }) {
  return (
    <div className="modal__comments comments">
      {comments.map(comment => (
        <div className="comments__comment comment">
          <p className="comment__date">{new Date().toLocaleDateString()}</p>
          <p className="comment__userName">{comment.name}</p>
          <p className="comment__comment">{comment.description}</p>
        </div>
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
