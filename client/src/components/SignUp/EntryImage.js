import React from 'react';
import image from './img/instagram_bg.png';
import './entry.scss';

const EntryImage = () => {
    return (
        <div className="col-6 d-flex justify-content-end">
            <img className="image-entry" src={image} alt="Instagram"/>
        </div>
    );
};

export default EntryImage;
