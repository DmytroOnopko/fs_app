import React from 'react';
import './error.scss';

const Error = (props) => {
    return (
        <div className="error p-4 rounded">
            <h2 className="error__title">{props.msg.name}</h2>
            <p className="error__text">{props.msg.message ? props.msg.message : props.msg.errmsg}</p>
        </div>
    )
};

export default Error;