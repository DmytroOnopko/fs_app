import React from 'react';
import './CommentPost.scss';

const CommentPost = () => {
    return(
        <div className="card-comments">
            <span className="card-comments__view">Посмотреть все комментарии (99)</span>
            <p className="card-comments-text">
                <span className="card-comments-text__login">Login user </span>
                Ut labore et dolore magna aliqua.
                <span className="card-comments-text__date">дата</span>
            </p>
        </div>
    )
};

export default CommentPost;