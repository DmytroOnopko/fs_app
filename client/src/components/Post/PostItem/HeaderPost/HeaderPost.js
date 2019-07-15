import React from 'react';
import './HeaderPost.scss';

const HeaderPost = (props) => {
    
    return(
        <div className="card-header d-flex align-items-center">
            <a href="http://localhost:3000/" className="card-header-img">
                <img className="card-header-img__circle"
                     src={props.author.img_url}
                     alt="user"/>
            </a>
            <div className="card-header-title d-flex flex-column">
                <span className="card-header-title__login">{props.author.login}</span>
                <span className="card-header-title__location">{props.location}</span>
            </div>
        </div>
    )
};

export default HeaderPost;