import React from 'react';
import image from './img/instagram_bg.png';
import './image.scss';

const Image = () => {
    return (
        <div className="col-12 col-md-6 d-flex justify-content-end">
            <img className="image-entry" src={image} alt="Instagram"/>
        </div>
    );
};

export default Image;
