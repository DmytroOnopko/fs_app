import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPostFromDb} from '../../action/post.action'
import './post.scss'

export class Post extends Component {

    componentDidMount() {
        // debugger
        console.log('componentDidMount->this', this);
        this.props.getPost();
    }

    render() {

        const {post, isLoading} = this.props;
        console.log(post);
        console.log(isLoading);
        const listPost = post.map(itemPost => {
            return (
                <li key={itemPost._id} className="card mt-5">
                    <div className="card-header d-flex align-items-center">
                        <a href="#" className="card-header-img">
                            <img className="card-header-img__circle"
                                 src="https://tse1.mm.bing.net/th?id=OIP.OzK2M7uOmKxJ2Zut9zGDUQHaE9&pid=Api&P=0&w=228&h=153"
                                 alt="user"/>
                        </a>
                        <div className="card-header-title d-flex flex-column">
                            <span className="card-header-title__login">Login user</span>
                            <span className="card-header-title__location">Location img</span>
                        </div>
                    </div>
                    <img className="card-img rounded-0" src={itemPost.img_urls} alt=""/>
                    <div className="card-body">
                        <i className="card-body__like far fa-heart"/>
                        <p className="card-body__like-count">{itemPost.like} отметок "Нравится"</p>
                        <p className="card-body-text">
                            <span className="card-body-text__login">Login user </span>
                            {itemPost.description}
                        </p>
                    </div>
                    <div className="card-comments">
                        <span className="card-comments__view">Посмотреть все комментарии (99)</span>
                        <p className="card-comments-text">
                            <span className="card-comments-text__login">Login user </span>
                            {itemPost.description}
                            <span className="card-comments-text__date">дата</span>
                        </p>
                    </div>
                    <div className="card-addComments">
                        <form className="card-addComments-wrap d-flex">
                            <textarea className="card-addComments-wrap__textarea" placeholder="Добавьте комментарий..."/>
                            <button className="card-addComments-wrap__btn">Опубликовать</button>
                        </form>
                    </div>
                </li>
            )
        });
        return (
            <ul className="card-wrap">
                {isLoading ? <span>Loading...</span> :
                    listPost.length ? listPost : <span>Your tape is empty</span>}
            </ul>
        );
    };
}

const mapStateToProps = (store) => {
    console.log('mapStateToProps->store', store);
    // debugger
    return {
        post: store.post.get('post').toJS(),
        isLoading: store.post.get('isLoading')
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log('mapDispatchToProps', dispatch);
    // debugger
    return {
        getPost: () => dispatch(getPostFromDb())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)