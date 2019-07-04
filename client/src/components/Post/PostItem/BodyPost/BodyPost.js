import React from "react";
import './BodyPost.scss';

const BodyPost = (props) => {
    const { post } = props;
    return(
        <>
            <img className="card-img rounded-0" src={post.img_urls} alt=""/>
            <div className="card-body">
                <i className="card-body__like far fa-heart"/>
                <p className="card-body__like-count">{post.like} отметок "Нравится"</p>
                <p className="card-body-text">
                    <span className="card-body-text__login">Login user </span>
                    {post.description}
                </p>
            </div>
        </>
    )
};

export default BodyPost;