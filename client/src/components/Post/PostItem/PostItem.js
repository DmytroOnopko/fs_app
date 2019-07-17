import React from 'react';
import HeaderPost from './HeaderPost/HeaderPost'
import BodyPost from './BodyPost/BodyPost';
import CommentPost from './CommentPost/CommentPost';
import AddCommentPost from './AddCommentPost/AddCommentPost'


const PostItem = (props) => {
    const { post } = props;
    const { author } = post;
    return(
        <li className="card mb-5">
            <HeaderPost author={author} location={post.location}/>
            <BodyPost post={post}/>
            <CommentPost/>
            <AddCommentPost/>
        </li>
    )
};

export default PostItem;
