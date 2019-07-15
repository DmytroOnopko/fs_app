import React from 'react';
import './HeaderPost.scss';
import {NavLink} from "react-router-dom";

const HeaderPost = (props) => {
    
    return(
        <div className="card-header d-flex align-items-center">
            <NavLink to={'profile/'+props.author._id} className="card-header-img">
                <img className="card-header-img__circle"
                     src={props.author.img_url}
                     alt="user"/>
            </NavLink>
            <div className="card-header-title d-flex flex-column">
                <span className="card-header-title__login">{props.author.login}</span>
                <span className="card-header-title__location">{props.location}</span>
            </div>
        </div>
    )
};

export default HeaderPost;
