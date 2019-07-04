import React from 'react';
import './AddCommentPost.scss';

const AddCommentPost = (props) => {
    return (
        <div className="card-addComments">
            <form className="card-addComments-wrap d-flex">
                <textarea className="card-addComments-wrap__textarea" placeholder="Добавьте комментарий..."/>
                <button className="card-addComments-wrap__btn">Опубликовать</button>
            </form>
        </div>
    );
};

export default AddCommentPost;